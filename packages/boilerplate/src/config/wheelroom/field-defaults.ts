/**
 *
 * These values are set unless specified differently
 *
 */

import {
  CheckboxField,
  CommonField,
  DateField,
  DropdownField,
  FieldDefaults,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  NumberField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
} from '@wheelroom/wheelroom'

const commonFieldDefaults: CommonField = {
  localized: false,
  name: '%Field name%',
  required: false,
}
const checkbox: CheckboxField = {
  initialContent: ['check'],
  items: ['check', 'box'],
  type: 'checkbox',
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
const media: MediaField = {
  initialContent: true,
  type: 'media',
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
    checkbox,
    date,
    dropdown,
    media,
    longText,
    multipleComponents,
    number,
    richText,
    shortText,
    singleComponent,
    tags,
  },
}
