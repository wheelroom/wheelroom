import { ComponentsMap } from '../lib/types/components-map'

import { query as articleContentQuery } from './article-content/graphql'
import { model as articleContentModel } from './article-content/model'

import { model as articleSectionModel } from './article-section/model'

import { query as globalsPartQuery } from './globals-part/graphql'
import { model as globalsPartModel } from './globals-part/model'

import { query as pageQuery } from './page/graphql'
import { model as pageModel } from './page/model'

export const componentsMap = {
  articleContent: {
    model: articleContentModel,
    query: articleContentQuery,
    type: 'subPage',
  },
  articleSection: {
    model: articleSectionModel,
    type: 'section',
  },
  globalsPart: {
    model: globalsPartModel,
    query: globalsPartQuery,
    type: 'global',
  },
  page: {
    model: pageModel,
    query: pageQuery,
    type: 'page',
  },
} as ComponentsMap
