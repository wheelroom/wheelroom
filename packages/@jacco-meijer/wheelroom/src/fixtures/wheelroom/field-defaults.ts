/**
 *
 * These values are set unless specified differently
 *
 */

import { Field } from '../../types/fields'

export const fieldDefaults: Field = {
  helpText: '%Field name% for %component name%',
  initialContent: 'Demo content for %component name% %field name%',
  localized: false,
  required: false,
  type: 'shortText',
}
