export const indexSubPageGlobal = (vars: any) => `/**
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
