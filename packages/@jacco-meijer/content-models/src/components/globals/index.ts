/**
 * Component index
 *
 * Component type: globals
 * Wheelroom type: global
 *
 */

import { query as globalsQuery } from './graphql'
import { fragment as globalsFragment } from './graphql'
import { model as globalsModel } from './model'

export const globals = {
  fragment: globalsFragment,
  model: globalsModel,
  query: globalsQuery,
}
