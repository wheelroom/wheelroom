/**
 *
 *  Common fields are present in all models
 *
 */

import { Fields } from '../../types/fields'
export const commonFields: Fields = {
  title: {
    helpText: 'Never displayed, only used for listing within Contentful',
    required: true,
  },
}
