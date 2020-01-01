/**
 *
 *  Common fields are present in all models
 *
 */

import { Fields } from '../types/fields'
export const configCommonFields: Fields = {
  __typename: {
    system: true,
  },
  title: {
    helpText: 'Never displayed, only used for listing within Contentful',
    required: true,
  },
}
