import { WheelroomComponent } from '../../types/wheelroom-components'
import {
  DropdownField,
  ImageField,
  MultipleComponentsField,
  NumberField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
} from '../../types/wheelroom-fields'
import { parser } from './parser'

const componentName = 'myDemoComponent'
const fieldName = 'myFieldName'
const fieldType = 'someFieldType'
let result

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

describe('The parser should parse', () => {
  /**
   * Component name
   */
  test('variable %Component name%', () => {
    result = parser('This is the test case for %Component name%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for My demo component')
  })

  test('variable %component name%', () => {
    result = parser('This is the test case for %component name%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for my demo component')
  })
  test('variable %componentName%', () => {
    result = parser('This is the test case for %componentName%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for myDemoComponent')
  })
  test('variable %ComponentName%', () => {
    result = parser('This is the test case for %ComponentName%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for MyDemoComponent')
  })
  test('variable %component-name%', () => {
    result = parser('This is the test case for %component-name%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for my-demo-component')
  })

  /**
   * Field name
   */
  test('variable %Field name%', () => {
    result = parser('This is the test case for %Field name%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for My field name')
  })
  test('variable %field name%', () => {
    result = parser('This is the test case for %field name%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for my field name')
  })
  test('variable %fieldName%', () => {
    result = parser('This is the test case for %fieldName%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for myFieldName')
  })
  test('variable %FieldName%', () => {
    result = parser('This is the test case for %FieldName%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for MyFieldName')
  })
  test('variable %field-name%', () => {
    result = parser('This is the test case for %field-name%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for my-field-name')
  })

  /**
   * Field type
   */
  test('variable %Field type%', () => {
    result = parser('This is the test case for %Field type%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for Some field type')
  })
  test('variable %field type%', () => {
    result = parser('This is the test case for %field type%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for some field type')
  })
  test('variable %fieldType%', () => {
    result = parser('This is the test case for %fieldType%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for someFieldType')
  })
  test('variable %FieldType%', () => {
    result = parser('This is the test case for %FieldType%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for SomeFieldType')
  })
  test('variable %field-type%', () => {
    result = parser('This is the test case for %field-type%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for some-field-type')
  })

  /**
   * Others
   */

  test('two variables %field-name% and %component-name%', () => {
    result = parser(
      'This is the test case for %field-name% and %component-name%',
      {
        componentName,
        fieldName,
      }
    )
    expect(result).toEqual(
      'This is the test case for my-field-name and my-demo-component'
    )
  })
  test('array with %field-name% and %component-name%', () => {
    result = parser(['%field-name%', '%component-name%'], {
      componentName,
      fieldName,
    })
    expect(result).toEqual(['my-field-name', 'my-demo-component'])
  })
  test('variable %componentVar(path:settings.asQuery)%', () => {
    result = parser(
      'This is the test case for %componentVar(path:settings.asQuery)%',
      {
        component,
        componentName,
      }
    )
    expect(result).toEqual('This is the test case for global')
  })
  test('variable %componentNameArray%', () => {
    result = parser(
      'This is the test case for %componentNameArray(filter:settings.asPageSection)%',
      {
        component,
        componentName,
        components: {
          testCompA: component,
          testCompB: component,
          testCompC: component,
        },
      }
    )
    expect(result).toEqual(
      'This is the test case for testCompA, testCompB, testCompC'
    )
  })
  test('variable [%componentNameArray%]', () => {
    result = parser(
      ['sampleD', '%componentNameArray(filter:settings.asPageSection)%'],
      {
        component,
        componentName,
        components: {
          testCompA: component,
          testCompB: component,
          testCompC: component,
        },
      }
    )
    expect(result).toEqual(['sampleD', 'testCompA', 'testCompB', 'testCompC'])
  })
  test('variable %firstItem% with proper field', () => {
    result = parser('This is the test case for %firstItem%', {
      componentName,
      field: component.fields.dropdownField,
    })
    expect(result).toEqual('This is the test case for first item')
  })
  test('variable %firstItem% with wrong field', () => {
    result = parser('This is the test case for %firstItem%', {
      componentName,
      field: component.fields.numberField,
    })
    expect(result).toEqual('This is the test case for bad-field-first-item')
  })
  test('variable %firstAllowedComponent% with singleComponent field', () => {
    result = parser('This is the test case for %firstAllowedComponent%', {
      componentName,
      field: component.fields.singleComponentField,
    })
    expect(result).toEqual('This is the test case for KL')
  })
  test('array %firstAllowedComponent% with multipleComponents field', () => {
    result = parser(['%firstAllowedComponent%'], {
      componentName,
      field: component.fields.multipleComponentsField,
    })
    expect(result).toEqual(['page'])
  })
})
