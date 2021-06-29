// import util from 'util'
import { JSDocTagInfo, SymbolDisplayPart } from 'typescript'
import { DocProperty } from './interface-to-doc-property'

type WheelroomTags = {
  description?: string
  plugin?: string
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

export interface ParseWheelroomTags {
  docProperty: DocProperty
}

export const parseWheelroomTags = ({
  docProperty,
}: ParseWheelroomTags): WheelroomTags | undefined => {
  const result: WheelroomTags = {}
  if (!docProperty.name) return
  result.typeName = docProperty.name
  if (!docProperty.jSDocTags?.length) {
    console.log(`${result.typeName} - Skipping model, no TSDoc tags`)
    return
  }
  const wheelroomTag = getTagByName({
    tags: docProperty.jSDocTags,
    name: 'wheelroom',
  })
  if (!wheelroomTag) {
    console.log(`${result.typeName} - Skipping model, no @wheelroom block tag`)
    return
  }
  const text = getTextSymbol({ symbols: wheelroomTag.text })
  const tags = getInlineTags({ search: text })
  const plugin = tags['@plugin']

  if (!plugin) {
    console.log(`${result.typeName} - Skipping model, no @plugin inline tag`)
    return
  }
  result.plugin = plugin

  const description = getTextSymbol({
    symbols: docProperty.documentationComment,
  })
  result.description = description
  result.fields = {}
  docProperty.docProperties?.forEach((docProperty: DocProperty) => {
    const wheelroomTag = getTagByName({
      tags: docProperty.jSDocTags,
      name: 'wheelroom',
    })
    if (wheelroomTag) {
      const text = getTextSymbol({ symbols: wheelroomTag.text })
      const tags = getInlineTags({ search: text })
      result.fields![docProperty.name || 'unknown'] = tags
    } else {
      console.log(
        `${result.typeName}/${docProperty.name} - Skipping field, no @wheelroom block tag`
      )
    }
  })
  return result
}
