import {
  ContentfulContent,
  ContentfulContentField,
  ContentfulContentSet,
} from '../../types/content-set'

const getReferences = (content: ContentfulContent): string[] => {
  const isReferingTo: string[] = []
  Object.entries(content.fields).forEach(
    ([fieldName, field]: [string, ContentfulContentField]) => {
      if (field.type === 'multipleComponents' && field.initialContent) {
        isReferingTo.push(...field.initialContent)
      }
      if (field.type === 'singleComponent' && field.initialContent) {
        isReferingTo.push(field.initialContent)
      }
    }
  )
  return isReferingTo
}

const compare = (contentA: ContentfulContent, contentB: ContentfulContent) => {
  const refCountA = getReferences(contentA)
  const refCountB = getReferences(contentB)
  if (refCountA > refCountB) {
    return 1
  } else if (refCountB > refCountA) {
    return -1
  }
  return 0
}

export const orderByDependency = (cfContentSet: ContentfulContentSet): void => {
  cfContentSet.sort(compare)
}
