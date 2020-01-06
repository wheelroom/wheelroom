import { WheelroomComponent } from '../../types/wheelroom-components'
import { parser } from './parser'

const componentName = 'myDemoComponent'
const fieldName = 'myFieldName'
const fieldType = 'someFieldType'
const pageSectionsArray = ['pageSectionA', 'pageSectionB']
let result

describe('The parser should parse', () => {
  /**
   * Component name
   */
  test('the variable %Component name%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %Component name%',
    })
    expect(result).toEqual('This is the test case for My demo component')
  })

  test('the variable %component name%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %component name%',
    })
    expect(result).toEqual('This is the test case for my demo component')
  })
  test('the variable %componentName%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %componentName%',
    })
    expect(result).toEqual('This is the test case for myDemoComponent')
  })
  test('the variable %ComponentName%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %ComponentName%',
    })
    expect(result).toEqual('This is the test case for MyDemoComponent')
  })
  test('the variable %component-name%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %component-name%',
    })
    expect(result).toEqual('This is the test case for my-demo-component')
  })

  /**
   * Field name
   */
  test('the variable %Field name%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %Field name%',
    })
    expect(result).toEqual('This is the test case for My field name')
  })
  test('the variable %field name%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %field name%',
    })
    expect(result).toEqual('This is the test case for my field name')
  })
  test('the variable %fieldName%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %fieldName%',
    })
    expect(result).toEqual('This is the test case for myFieldName')
  })
  test('the variable %FieldName%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %FieldName%',
    })
    expect(result).toEqual('This is the test case for MyFieldName')
  })
  test('the variable %field-name%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %field-name%',
    })
    expect(result).toEqual('This is the test case for my-field-name')
  })

  /**
   * Field type
   */
  test('the variable %Field type%', () => {
    result = parser({
      componentName,
      fieldType,
      pageSectionsArray,
      unparsed: 'This is the test case for %Field type%',
    })
    expect(result).toEqual('This is the test case for Some field type')
  })
  test('the variable %field type%', () => {
    result = parser({
      componentName,
      fieldType,
      pageSectionsArray,
      unparsed: 'This is the test case for %field type%',
    })
    expect(result).toEqual('This is the test case for some field type')
  })
  test('the variable %fieldType%', () => {
    result = parser({
      componentName,
      fieldType,
      pageSectionsArray,
      unparsed: 'This is the test case for %fieldType%',
    })
    expect(result).toEqual('This is the test case for someFieldType')
  })
  test('the variable %FieldType%', () => {
    result = parser({
      componentName,
      fieldType,
      pageSectionsArray,
      unparsed: 'This is the test case for %FieldType%',
    })
    expect(result).toEqual('This is the test case for SomeFieldType')
  })
  test('the variable %field-type%', () => {
    result = parser({
      componentName,
      fieldType,
      pageSectionsArray,
      unparsed: 'This is the test case for %field-type%',
    })
    expect(result).toEqual('This is the test case for some-field-type')
  })

  test('the variable %field-name% and %component-name%', () => {
    result = parser({
      componentName,
      fieldName,
      pageSectionsArray,
      unparsed: 'This is the test case for %field-name% and %component-name%',
    })
    expect(result).toEqual(
      'This is the test case for my-field-name and my-demo-component'
    )
  })

  test('the variable %createPageQuery%', () => {
    result = parser({
      componentName,
      graphQL: {
        createPageQuery: 'global',
      },
      unparsed: 'This is the test case for %createPageQuery%',
    })
    expect(result).toEqual('This is the test case for global')
  })

  const component: WheelroomComponent = {
    fields: {
      dateField: {
        initialContent: 'Content for date',
        type: 'date',
      },
      dropdownField: {
        initialContent: 'Content for dropdown',
        type: 'dropdown',
      },
      imageField: {
        initialContent: 'Content for image',
        type: 'image',
      },
      multipleComponentsField: {
        initialContent: 'Content for multipleComponents',
        type: 'multipleComponents',
      },
      numberField: {
        initialContent: 'Content for number',
        type: 'number',
      },
      richTextField: {
        initialContent: 'Content for richText',
        type: 'richText',
      },
      shortTextField: {
        initialContent: 'Content for shortText',
        type: 'shortText',
      },
      singleComponentField: {
        initialContent: 'Content for singleComponent',
        type: 'singleComponent',
      },
      tagsField: {
        initialContent: 'Content for tags',
        type: 'tags',
      },
    },
    graphQL: {},
    modelVersion: '1.0.0',
  }
  test('the variable %componentHtmlAttributes%', () => {
    result = parser({
      component,
      componentName,
      graphQL: {
        createPageQuery: 'global',
      },
      unparsed: '<Element %componentHtmlAttributes% />',
    })
    expect(result).toEqual(
      '<Element dateField="Content for date" dropdownField="Content for dropdown" imageField="Content for image" multipleComponentsField="Content for multipleComponents" numberField="Content for number" richTextField="Content for richText" shortTextField="Content for shortText" singleComponentField="Content for singleComponent" tagsField="Content for tags" />'
    )
  })
})
