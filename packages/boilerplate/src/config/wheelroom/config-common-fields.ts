/**
 *
 *  Common fields are present in all models
 *
 */

import { WheelroomFields } from '@jacco-meijer/wheelroom'
export const configCommonFields: WheelroomFields = {
  __typename: {
    system: true,
  },
  title: {
    helpText: 'Never displayed, only used for listing within Contentful',
    required: true,
  },
}
