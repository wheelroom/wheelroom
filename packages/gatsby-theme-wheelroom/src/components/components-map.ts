import { ComponentConfig, ComponentsMap } from '../lib/types/components-map'

import { fragment as articleContentFragment } from './article-content/graphql'
import { query as articleContentQuery } from './article-content/graphql'
import { model as articleContentModel } from './article-content/model'

import { fragment as articleSectionFragment } from './article-section/graphql'
import { model as articleSectionModel } from './article-section/model'

import { query as globalsPartQuery } from './globals-part/graphql'
import { fragment as globalsPartFragment } from './globals-part/graphql'
import { model as globalsPartModel } from './globals-part/model'

import { query as pageQuery } from './page/graphql'
import { model as pageModel } from './page/model'

export const componentsMap = {
  articleContent: {
    fragment: articleContentFragment,
    model: articleContentModel,
    query: articleContentQuery,
    type: 'subPage',
  } as ComponentConfig,
  articleSection: {
    fragment: articleSectionFragment,
    model: articleSectionModel,
    type: 'section',
  } as ComponentConfig,
  globalsPart: {
    fragment: globalsPartFragment,
    model: globalsPartModel,
    query: globalsPartQuery,
    type: 'global',
  } as ComponentConfig,
  page: {
    model: pageModel,
    query: pageQuery,
    type: 'page',
  } as ComponentConfig,
} as ComponentsMap
