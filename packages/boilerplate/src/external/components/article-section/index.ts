/**
 * Component index
 *
 * Component type: articleSection
 * Wheelroom type: section
 *
 */

import { ComponentConfig } from '@jacco-meijer/wheelroom'
import { fragment as articleSectionFragment } from './graphql'
import { model as articleSectionModel } from './model'

export const articleSection = {
  fragment: articleSectionFragment,
  model: articleSectionModel,
} as ComponentConfig
