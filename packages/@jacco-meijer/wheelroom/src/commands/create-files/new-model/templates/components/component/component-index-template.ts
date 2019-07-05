import {Vars } from '../../../create-new-model'

export const componentIndexTemplate = (vars: Vars) => `/**
 * Component index
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

export * from './${vars.componentFileName}'
`
