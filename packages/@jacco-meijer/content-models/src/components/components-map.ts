import { ComponentsMap, ComponentsMapItem } from '@jacco-meijer/wheelroom'

import { query as pageQuery } from './page/graphql'
import { model as pageModel } from './page/model'

export const componentsMap = {
  page: {
    model: pageModel,
    query: pageQuery,
  } as ComponentsMapItem,
} as ComponentsMap
