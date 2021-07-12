import ts, { JSDocTagInfo, SymbolDisplayPart } from 'typescript'
import {
  DocProperty,
  interfaceToDocProperty,
} from './interface-to-doc-property'
import { isExportedDeclaration } from './is-exported-declaration'

export type WrInterface = {
  description?: string
  pluginName?: string
  fields?: {
    [fieldName: string]: Record<string, string>
  }
  typeName?: string
}

const getInlineTags = ({
  search,
}: {
  search: string
}): Record<string, string> => {
  const matches = search.matchAll(/{.*(@[a-zA-z0-9]+) +([^{}]*).*}/g)
  return Array.from(matches).reduce(
    (result, match) => ({ ...result, [match[1]]: match[2] }),
    {}
  )
}

const getTextSymbol = ({ symbols }: { symbols?: SymbolDisplayPart[] }) => {
  if (!symbols) return ''
  const tagText = symbols.find((text) => text.kind === 'text')
  return tagText?.text || ''
}

interface GetTagByName {
  tags?: JSDocTagInfo[]
  name: string
}

const getTagByName = ({ tags, name }: GetTagByName) => {
  if (!tags) return
  return tags.find((tag) => tag.name === name)
}

export interface ParseInterface {
  checker: ts.TypeChecker
  node: ts.Node
}

export const parseWrInterface = ({
  checker,
  node,
}: ParseInterface): WrInterface | undefined => {
  const wrInterface: WrInterface = {}

  if (
    !isExportedDeclaration({ node }) ||
    !ts.isInterfaceDeclaration(node) ||
    !node.name
  )
    return
  const type = checker.getTypeAtLocation(node)
  if (!type) return
  const docProperty = interfaceToDocProperty({ type, checker })

  if (!docProperty.name) return
  wrInterface.typeName = docProperty.name
  if (!docProperty.jSDocTags?.length) {
    console.log(`${wrInterface.typeName} - Skipping model, no TSDoc tags`)
    return
  }
  const wheelroomTag = getTagByName({
    tags: docProperty.jSDocTags,
    name: 'wheelroom',
  })
  if (!wheelroomTag) {
    console.log(
      `${wrInterface.typeName} - Skipping model, no @wheelroom block tag`
    )
    return
  }
  const text = getTextSymbol({ symbols: wheelroomTag.text })
  const tags = getInlineTags({ search: text })
  const pluginName = tags['@plugin']

  if (!pluginName) {
    console.log(
      `${wrInterface.typeName} - Skipping model, no @pluginName inline tag`
    )
    return
  }
  wrInterface.pluginName = pluginName

  const description = getTextSymbol({
    symbols: docProperty.documentationComment,
  })
  wrInterface.description = description
  wrInterface.fields = {}
  docProperty.docProperties?.forEach((docProperty: DocProperty) => {
    const wheelroomTag = getTagByName({
      tags: docProperty.jSDocTags,
      name: 'wheelroom',
    })
    if (wheelroomTag) {
      const text = getTextSymbol({ symbols: wheelroomTag.text })
      const tags = getInlineTags({ search: text })
      wrInterface.fields![docProperty.name || 'unknown'] = tags
    } else {
      console.log(
        `${wrInterface.typeName}/${docProperty.name} - Skipping field, no @wheelroom block tag`
      )
    }
  })
  return wrInterface
}
