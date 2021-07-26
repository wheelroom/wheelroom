import ts, { JSDocTagInfo, SymbolDisplayPart } from 'typescript'
import chalk from 'chalk'
import {
  DocProperty,
  interfaceToDocProperty,
} from './interface-to-doc-property'
import { isExportedDeclaration } from './is-exported-declaration'
import { stripDoubleQuotes } from './case-helpers'

export type WrInterface = {
  /** The inline tags defined within the @wheelroom tag for each field */
  fieldTags?: {
    [fieldName: string]: Record<string, string>
  }
  /** The inline tags defined within the @wheelroom tagon the interface */
  interfaceTags?: Record<string, string>
  /** The typescript type of the interface  */
  typeName?: string
}

// TODO: Don't overwrite tags when the same tag exists multiple times
const getInlineTags = ({
  search,
}: {
  search: string
}): Record<string, string> => {
  const matches = search.matchAll(/{(@[a-zA-z0-9]+) *([^{}]*)}/g)
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
  const log = console.log
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
    log(chalk.red(`No TSDoc tags: ${wrInterface.typeName}`))
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
    log(chalk.red(`No @wheelroom block tag: ${wrInterface.typeName}`))
    return
  }
  const text = getTextSymbol({ symbols: wheelroomTag.text })
  const tags = getInlineTags({ search: text })

  if (!tags['@plugin']) {
    log(chalk.red(`No @plugin inline tag: ${wrInterface.typeName}`))
    return
  }
  // Strip double quotes from plugin name, double quotes are needed when an
  // @-character is used in a module. Eg {@plugin @wheelroom/module}
  tags['@plugin'] = stripDoubleQuotes(tags['@plugin'])

  wrInterface.interfaceTags = tags

  // We use @description instead, because this description only works for the
  // interface header, not for the field descriptions
  //
  // const description = getTextSymbol({
  //   symbols: docProperty.documentationComment,
  // })
  // wrInterface.description = description

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
      log(
        chalk.red(
          `No @wheelroom block tag: ${wrInterface.typeName}/${docProperty.name}`
        )
      )
    }
  })
  return wrInterface
}
