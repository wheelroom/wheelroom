export const variationsTemplate = (
  componentFileName: string,
  componentClassName: string,
  componentType: string,
  wheelroomType: string
) => `/**
 * Component variation constants
 *
 * Each description serves as an ID's and is visible for Contentful content editors
 *
 * Component type: ${componentType}
 * Wheelroom type: ${wheelroomType}
 *
 */

import { ${componentClassName}BasicVar } from './${componentFileName}-basic-var'

export const variations = {
  'No variations yet': ${componentClassName}BasicVar,
}
`
