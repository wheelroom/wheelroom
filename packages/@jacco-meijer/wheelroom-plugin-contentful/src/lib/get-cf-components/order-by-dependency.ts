import {
  ContentfulContent,
  ContentfulContentSet,
} from '../../types/content-set'

const compare = (contentA: ContentfulContent, contentB: ContentfulContent) => {
  if (!contentA.allowedComponents) {
    return -1
  }
  if (contentA.allowedComponents.includes(contentB.model)) {
    return 1
  } else {
    return 0
  }
}

export const orderByDependency = (cfContentSet: ContentfulContentSet): void => {
  cfContentSet.sort(compare)
}
