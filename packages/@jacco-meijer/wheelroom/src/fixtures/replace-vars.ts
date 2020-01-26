import { WheelroomComponent } from '../types/wheelroom-components'
import {
  DropdownField,
  ImageField,
  MultipleComponentsField,
  NumberField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
} from '../types/wheelroom-fields'

const componentName = 'myDemoComponent'
const fieldName = 'myFieldName'
const fieldType = 'someFieldType'

const component: WheelroomComponent = {
  fields: {
    dateField: {
      initialContent: 'DD',
      type: 'date',
    },
    dropdownField: {
      initialContent: 'AB',
      items: ['first item', 'second item'],
      type: 'dropdown',
    } as DropdownField,
    imageField: {
      initialContent: true,
      type: 'image',
    } as ImageField,
    multipleComponentsField: {
      allowedComponents: ['page'],
      initialContent: ['CD'],
      type: 'multipleComponents',
    } as MultipleComponentsField,
    numberField: {
      initialContent: 5,
      type: 'number',
    } as NumberField,
    richTextField: {
      initialContent: 'EF',
      type: 'richText',
    } as RichTextField,
    shortTextField: {
      initialContent: 'GH',
      type: 'shortText',
    } as ShortTextField,
    singleComponentField: {
      allowedComponents: ['KL'],
      initialContent: 'KL',
      type: 'singleComponent',
    } as SingleComponentField,
    tagsField: {
      initialContent: ['tag A', 'tag B', 'tag C'],
      type: 'tags',
    } as TagsField,
  },
  modelVersion: '1.0.0',
  settings: {
    asPageSection: true,
    asQuery: 'global',
  },
}

export const replaceVars = {
  component,
  componentName,
  components: {
    testCompA: component,
    testCompB: component,
    testCompC: component,
  },
  fieldName,
  fieldType,
}
