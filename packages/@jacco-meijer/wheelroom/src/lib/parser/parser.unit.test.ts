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

describe('The parser should parse', () => {
  /**
   * Component name
   */
  test('the variable %Component name%', () => {
    result = parser('This is the test case for %Component name%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for My demo component')
  })

  test('the variable %component name%', () => {
    result = parser('This is the test case for %component name%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for my demo component')
  })
  test('the variable %componentName%', () => {
    result = parser('This is the test case for %componentName%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for myDemoComponent')
  })
  test('the variable %ComponentName%', () => {
    result = parser('This is the test case for %ComponentName%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for MyDemoComponent')
  })
  test('the variable %component-name%', () => {
    result = parser('This is the test case for %component-name%', {
      componentName,
    })
    expect(result).toEqual('This is the test case for my-demo-component')
  })

  /**
   * Field name
   */
  test('the variable %Field name%', () => {
    result = parser('This is the test case for %Field name%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for My field name')
  })
  test('the variable %field name%', () => {
    result = parser('This is the test case for %field name%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for my field name')
  })
  test('the variable %fieldName%', () => {
    result = parser('This is the test case for %fieldName%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for myFieldName')
  })
  test('the variable %FieldName%', () => {
    result = parser('This is the test case for %FieldName%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for MyFieldName')
  })
  test('the variable %field-name%', () => {
    result = parser('This is the test case for %field-name%', {
      componentName,
      fieldName,
    })
    expect(result).toEqual('This is the test case for my-field-name')
  })

  /**
   * Field type
   */
  test('the variable %Field type%', () => {
    result = parser('This is the test case for %Field type%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for Some field type')
  })
  test('the variable %field type%', () => {
    result = parser('This is the test case for %field type%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for some field type')
  })
  test('the variable %fieldType%', () => {
    result = parser('This is the test case for %fieldType%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for someFieldType')
  })
  test('the variable %FieldType%', () => {
    result = parser('This is the test case for %FieldType%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for SomeFieldType')
  })
  test('the variable %field-type%', () => {
    result = parser('This is the test case for %field-type%', {
      componentName,
      fieldType,
    })
    expect(result).toEqual('This is the test case for some-field-type')
  })

  test('the variable %field-name% and %component-name%', () => {
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

  const component: WheelroomComponent = {
    fields: {
      dateField: {
        initialContent: 'DD',
        type: 'date',
      },
      dropdownField: {
        initialContent: 'AB',
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
      asQuery: 'global',
    },
  }

  test('the variable %componentHtmlAttributes%', () => {
    result = parser('<Element %componentHtmlAttributes% />', {
      component,
      componentName,
    })
    expect(result).toEqual(
      '<Element dateField="DD" dropdownField="AB" imageField="value" multipleComponentsField="value" numberField="value" richTextField="EF" shortTextField="GH" singleComponentField="KL" tagsField="value" />'
    )
  })

  test('the variable %componentVar(path:settings.asQuery)%', () => {
    result = parser(
      'This is the test case for %componentVar(path:settings.asQuery)%',
      {
        component,
        componentName,
      }
    )

    expect(result).toEqual('This is the test case for global')
  })
})
