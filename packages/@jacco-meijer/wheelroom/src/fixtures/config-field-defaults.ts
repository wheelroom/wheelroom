/**
 *
 * These values are set unless specified differently
 *
 */

import { FieldDefaults } from '../types/wheelroom-config'
import {
  CommonField,
  DateField,
  DropdownField,
  ImageField,
  LongTextField,
  MultipleComponentsField,
  NumberField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
} from '../types/wheelroom-fields'

const commonFieldDefaults: CommonField = {
  localized: false,
  name: '%Field name%',
  required: false,
}
const date: DateField = {
  initialContent: '2019-06-03T00:00+01:00',
  type: 'date',
}
const dropdown: DropdownField = {
  initialContent: '%firstItem%',
  items: ['drop', 'down'],
  type: 'dropdown',
}
const image: ImageField = {
  initialContent: true,
  type: 'image',
}
const longText: LongTextField = {
  initialContent: 'Initial content for long text field',
  type: 'longText',
}
const multipleComponents: MultipleComponentsField = {
  allowedComponents: ['%firstAllowedComponent%'],
  initialContent: ['%firstAllowedComponent%'],
  type: 'multipleComponents',
}
const number: NumberField = {
  initialContent: 5,
  type: 'number',
}
const richText: RichTextField = {
  initialContent: 'Initial content for rich text field',
  type: 'richText',
}
const shortText: ShortTextField = {
  initialContent: 'Initial content for short text field',
  type: 'shortText',
}
const singleComponent: SingleComponentField = {
  allowedComponents: ['%firstAllowedComponent%'],
  initialContent: '%firstAllowedComponent%',
  type: 'singleComponent',
}
const tags: TagsField = {
  initialContent: ['bright', 'brighter', 'brightest'],
  type: 'tags',
}

export const configFieldDefaults: FieldDefaults = {
  commonFieldDefaults,
  fieldTypeDefaults: {
    date,
    dropdown,
    image,
    longText,
    multipleComponents,
    number,
    richText,
    shortText,
    singleComponent,
    tags,
  },
}
