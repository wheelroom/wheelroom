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

export const orderByDependency = (
  cfContentSet: ContentfulContentSet
): ContentfulContentSet => {
  const withoutReferences: ContentfulContentSet = []
  const withReferences: ContentfulContentSet = []

  cfContentSet.forEach((cfContent: ContentfulContent) => {
    if (getReferences(cfContent).length > 0) {
      withReferences.push(cfContent)
    } else {
      withoutReferences.push(cfContent)
    }
  })
  return [...withoutReferences, ...withReferences]
}
