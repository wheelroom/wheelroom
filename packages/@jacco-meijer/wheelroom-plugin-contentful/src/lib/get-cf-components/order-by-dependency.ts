import {
  ContentfulContent,
  ContentfulContentSet,
} from '../../types/content-set'

const compare = (contentA: ContentfulContent, contentB: ContentfulContent) => {
  if (contentA.allowedComponents.includes(contentB.model)) {
    return 1
  } else {
    return -1
  }
}

export const orderByDependency = (cfContentSet: ContentfulContentSet): void => {
  console.log('sort BEFORE', cfContentSet)
  cfContentSet.sort(compare)
  console.log('sort AFTER', cfContentSet)
}
