/**
 *
 * These values are set unless specified differently.
 *
 * Don't set fields here that require specific values for different field types.
 * Setting 'initialContent' to a string might break date fields that don't have
 * a initialContent value themselves.
 *
 */

import { WheelroomField } from '@jacco-meijer/wheelroom'

export const configFieldDefaults: WheelroomField = {
  localized: false,
  required: false,
  type: 'shortText',
}
