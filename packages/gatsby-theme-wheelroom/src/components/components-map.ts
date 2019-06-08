import { ComponentsMap } from '../lib/types/components-map'

import { model as articleContentModel } from './article-content/model'
import { query as articleContentQuery } from './article-content/query'

import { model as articleSectionModel } from './article-section/model'

import { model as globalsPartModel } from './globals-part/model'
import { query as globalsPartQuery } from './globals-part/query'

import { model as pageModel } from './page/model'
import { query as pageQuery } from './page/query'

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
