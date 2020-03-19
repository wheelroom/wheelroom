import {
  ContentfulContent,
  ContentfulContentSet,
} from '../../types/content-set'

const compare = (contentA: ContentfulContent, contentB: ContentfulContent) => {
  if (contentA.dependsOnModels.length > contentB.dependsOnModels.length) {
    return 1
  } else {
    return -1
  }
}

export const orderByDependency = (cfContentSet: ContentfulContentSet): void => {
  cfContentSet.sort(compare)
}
