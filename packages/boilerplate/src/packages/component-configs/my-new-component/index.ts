/**
 * Component index
 *
 * Component type: myNewComponent
 * Wheelroom type: global
 *
 */

import { ComponentConfig } from '@jacco-meijer/wheelroom'
import { query } from './graphql'
import { fragment } from './graphql'
import { model } from './model'

export const myNewComponent = {
  fragment,
  model,
  query,
} as ComponentConfig
