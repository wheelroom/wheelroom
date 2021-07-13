import ts, { JSDocTagInfo, SymbolDisplayPart } from 'typescript'
import {
  DocProperty,
  interfaceToDocProperty,
} from './interface-to-doc-property'
import { isExportedDeclaration } from './is-exported-declaration'

export type WrInterface = {
  description?: string
  /** The inline tags defined within the @wheelroom tag for each field */
  fieldTags?: {
    [fieldName: string]: Record<string, string>
  }
  /** The inline tags defined within the @wheelroom tagon the interface */
  interfaceTags?: Record<string, string>
  /** The typescript type of the interface  */
  typeName?: string
}

const getInlineTags = ({
  search,
}: {
  search: string
}): Record<string, string> => {
  const matches = search.matchAll(/{(@[a-zA-z0-9]+) +([^{}]*)}/g)
  const tags = Array.from(matches).reduce(
    (result, match) => ({ ...result, [match[1]]: match[2] }),
    {}
  )
  return tags
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
    console.log(`Warning: Skippig ${wrInterface.typeName}, no TSDoc tags`)
    return
  }
  const wheelroomTag = getTagByName({
    tags: docProperty.jSDocTags,
    name: 'wheelroom',
  })
  /**
   * Checking for tags. Only check the tags that are required for exporting to a
   * plugin. That makes the @wheelroom block tag and the @plugin inline tag
   * required. All others like @type are optional at this point.
   */
  if (!wheelroomTag) {
    console.log(
      `Warning: Skippig ${wrInterface.typeName}, no @wheelroom block tag`
    )
    return
  }
  const text = getTextSymbol({ symbols: wheelroomTag.text })
  const tags = getInlineTags({ search: text })

  if (!tags['@plugin']) {
    console.log(
      `Warning: Skippig ${wrInterface.typeName}, no @plugin inline tag`
    )
    return
  }

  wrInterface.interfaceTags = tags

  const description = getTextSymbol({
    symbols: docProperty.documentationComment,
  })
  wrInterface.description = description
  wrInterface.fieldTags = {}
  docProperty.docProperties?.forEach((docProperty: DocProperty) => {
    const wheelroomTag = getTagByName({
      tags: docProperty.jSDocTags,
      name: 'wheelroom',
    })
    if (wheelroomTag) {
      const text = getTextSymbol({ symbols: wheelroomTag.text })
      const tags = getInlineTags({ search: text })
      wrInterface.fieldTags![docProperty.name || 'unknown'] = tags
    } else {
      console.log(
        `Warning: Skippig ${docProperty.name} field of ${wrInterface.typeName}, no @wheelroom block tag`
      )
    }
  })
  return wrInterface
}
