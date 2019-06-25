import { ComponentsMap, ComponentsMapItem } from '@jacco-meijer/wheelroom'

import { fragment as articleSectionFragment } from './article-section/graphql'
import { model as articleSectionModel } from './article-section/model'

export const componentsMap = {
  articleSection: {
    fragment: articleSectionFragment,
    model: articleSectionModel,
  } as ComponentsMapItem,
} as ComponentsMap
