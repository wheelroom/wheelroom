/**
 *
 *  Common fields are present in all models
 *
 */

import {
  ShortTextField,
  WheelroomFields,
} from '../../../types/wheelroom-fields'

export const configCommonFields: WheelroomFields = {
  __typename: {
    system: true,
    type: 'shortText',
  } as ShortTextField,
  title: {
    helpText: 'Never displayed, only used for listing within Contentful',
    initialContent: '%Component name% generated from boilerplate',
    required: true,
    type: 'shortText',
  } as ShortTextField,
}
