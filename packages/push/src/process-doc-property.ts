// import util from 'util'
import { JSDocTagInfo, SymbolDisplayPart } from 'typescript'
import { DocProperty } from './push'

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

export const processDocProperty = ({
  docProperty,
}: {
  docProperty: DocProperty
}) => {
  if (!docProperty.name) return
  console.log('==============')
  if (!docProperty.jSDocTags?.length) {
    console.log(`Could not find js doc tags for ${docProperty.name}`)
    return
  }
  const wheelroomTag = getTagByName({
    tags: docProperty.jSDocTags,
    name: 'wheelroom',
  })
  if (!wheelroomTag) {
    console.log(`Could not find @wheelroom for ${docProperty.name}`)
    return
  }
  const text = getTextSymbol({ symbols: wheelroomTag.text })
  const tags = getInlineTags({ search: text })
  const platform = tags['@platform']

  if (!platform) {
    console.log(`Could not find @platform inline for ${docProperty.name}`)
    return
  }
  console.log(`Sending ${docProperty.name} to ${platform}`)
  const description = getTextSymbol({
    symbols: docProperty.documentationComment,
  })
  console.log(description)
  docProperty.docProperties?.forEach((docProperty: DocProperty) => {
    const wheelroomTag = getTagByName({
      tags: docProperty.jSDocTags,
      name: 'wheelroom',
    })
    if (wheelroomTag) {
      const text = getTextSymbol({ symbols: wheelroomTag.text })
      const tags = getInlineTags({ search: text })
      console.log(`Found field ${docProperty.name} with tags:`, tags)
    } else {
      console.log(`Could not find @wheelroom for field ${docProperty.name}`)
    }
  })
}
