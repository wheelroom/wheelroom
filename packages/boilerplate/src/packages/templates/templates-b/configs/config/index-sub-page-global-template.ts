import { Vars } from '../../../create-new-model'

export const indexSubPageGlobalTemplate = (vars: Vars) => `/**
 * Component index
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

import { ComponentConfig } from '@jacco-meijer/wheelroom'
import { query } from './graphql'
import { fragment } from './graphql'
import { model } from './model'

export const ${vars.componentType} = {
  fragment,
  model,
  query,
} as ComponentConfig
`
