/**
 *
 *  Common fields are present in all models
 *
 */

import { WheelroomFields } from '@jacco-meijer/wheelroom'
import { ShortTextField } from '@jacco-meijer/wheelroom'

export const configCommonFields: WheelroomFields = {
  __typename: {
    system: true,
    type: 'shortText',
  } as ShortTextField,
  title: {
    helpText: 'Never displayed, only used for listing within Contentful',
    required: true,
    type: 'shortText',
  } as ShortTextField,
}
