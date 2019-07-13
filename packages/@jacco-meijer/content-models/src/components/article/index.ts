/**
 * Component index
 *
 * Component type: article
 * Wheelroom type: subPage
 *
 */

import { query as articleQuery } from './graphql'
import { fragment as articleFragment } from './graphql'
import { model as articleModel } from './model'

export const article = {
  fragment: articleFragment,
  model: articleModel,
  query: articleQuery,
}
