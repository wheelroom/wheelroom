import {Vars } from '../../../create-new-model'

export const variationsTemplate = (vars: Vars) => `/**
 * Component variation constants
 *
 * Each description serves as an ID's and is visible for Contentful content editors
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

export const variations = ['No variations yet']
`
