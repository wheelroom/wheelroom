export const indexSectionPart = (vars: any) => `/**
 * Component index
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

import { ComponentsMapItem } from '@jacco-meijer/wheelroom'
import { fragment } from './graphql'
import { model } from './model'
import { variations } from './variations'

export const ${vars.componentType} = {
  fragment,
  model,
  variations,
}
`
