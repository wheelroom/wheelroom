import { WheelroomComponent } from '../../../types/wheelroom-components'
import {
  CheckboxField,
  DateField,
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  NumberField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
} from '../../../types/wheelroom-fields'

const componentName = 'myDemoComponent'
const fieldName = 'myFieldName'
const fieldType = 'someFieldType'

const component: WheelroomComponent = {
  fields: {
    checkboxField: {
      initialContent: ['check A'],
      items: ['check A', 'check B'],
      type: 'checkbox',
      translations: {
        nl: {
          items: ['dutch check A', 'dutch check B'],
        },
      },
    } as CheckboxField,
    dateField: {
      initialContent: '2020-03-02T04:05+01:00',
      type: 'date',
    } as DateField,
    dropdownField: {
      initialContent: 'drop A',
      items: ['drop A', 'drop B'],
      type: 'dropdown',
      translations: {
        nl: {
          items: ['dutch drop A', 'dutch drop B'],
        },
      },
    } as DropdownField,
    longTextField: {
      initialContent: 'My long text',
      type: 'longText',
    } as LongTextField,
    mediaField: {
      initialContent: true,
      type: 'media',
    } as MediaField,
    multipleComponentsField: {
      allowedComponents: ['page'],
      initialContent: ['someMultiplePage'],
      type: 'multipleComponents',
    } as MultipleComponentsField,
    numberField: {
      initialContent: 5,
      type: 'number',
    } as NumberField,
    richTextField: {
      initialContent: 'My richt text field',
      type: 'richText',
    } as RichTextField,
    shortTextField: {
      initialContent: 'My short text field',
      type: 'shortText',
    } as ShortTextField,
    singleComponentField: {
      allowedComponents: ['page'],
      initialContent: 'someSinglePage',
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
  locale: 'nl',
}
