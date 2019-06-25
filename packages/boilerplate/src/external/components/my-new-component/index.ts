/**
 * Component index
 *
 * Component type: myNewComponent
 * Wheelroom type: subPage
 *
 */

import { ComponentConfig } from '@jacco-meijer/wheelroom'
import { query as myNewComponentQuery } from './graphql'
import { fragment as myNewComponentFragment } from './graphql'
import { model as myNewComponentModel } from './model'

export const myNewComponent = {
  fragment: myNewComponentFragment,
  model: myNewComponentModel,
  query: myNewComponentQuery,
} as ComponentConfig
