import { parser } from './parser'

const componentName = 'myDemoComponent'
const fieldName = 'myFieldName'
const fieldType = 'someFieldType'
const pageSectionsArray = ['pageSectionA', 'pageSectionB']
let result

/**
 * Component name
 */
test('Parse %Component name%', () => {
  result = parser({
    componentName,
    fieldName,
    pageSectionsArray,
    unparsed: 'This is the test case for %Component name%',
  })
  expect(result).toEqual('This is the test case for My demo component')
})

test('Parse %component name%', () => {
  result = parser({
    componentName,
    fieldName,
    pageSectionsArray,
    unparsed: 'This is the test case for %component name%',
  })
  expect(result).toEqual('This is the test case for my demo component')
})
test('Parse %componentName%', () => {
  result = parser({
    componentName,
    fieldName,
    pageSectionsArray,
    unparsed: 'This is the test case for %componentName%',
  })
  expect(result).toEqual('This is the test case for myDemoComponent')
})
test('Parse %ComponentName%', () => {
  result = parser({
    componentName,
    fieldName,
    pageSectionsArray,
    unparsed: 'This is the test case for %ComponentName%',
  })
  expect(result).toEqual('This is the test case for MyDemoComponent')
})
test('Parse %component-name%', () => {
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
test('Parse %Field name%', () => {
  result = parser({
    componentName,
    fieldName,
    pageSectionsArray,
    unparsed: 'This is the test case for %Field name%',
  })
  expect(result).toEqual('This is the test case for My field name')
})
test('Parse %field name%', () => {
  result = parser({
    componentName,
    fieldName,
    pageSectionsArray,
    unparsed: 'This is the test case for %field name%',
  })
  expect(result).toEqual('This is the test case for my field name')
})
test('Parse %fieldName%', () => {
  result = parser({
    componentName,
    fieldName,
    pageSectionsArray,
    unparsed: 'This is the test case for %fieldName%',
  })
  expect(result).toEqual('This is the test case for myFieldName')
})
test('Parse %FieldName%', () => {
  result = parser({
    componentName,
    fieldName,
    pageSectionsArray,
    unparsed: 'This is the test case for %FieldName%',
  })
  expect(result).toEqual('This is the test case for MyFieldName')
})
test('Parse %field-name%', () => {
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
test('Parse %Field type%', () => {
  result = parser({
    componentName,
    fieldType,
    pageSectionsArray,
    unparsed: 'This is the test case for %Field type%',
  })
  expect(result).toEqual('This is the test case for Some field type')
})
test('Parse %field type%', () => {
  result = parser({
    componentName,
    fieldType,
    pageSectionsArray,
    unparsed: 'This is the test case for %field type%',
  })
  expect(result).toEqual('This is the test case for some field type')
})
test('Parse %fieldType%', () => {
  result = parser({
    componentName,
    fieldType,
    pageSectionsArray,
    unparsed: 'This is the test case for %fieldType%',
  })
  expect(result).toEqual('This is the test case for someFieldType')
})
test('Parse %FieldType%', () => {
  result = parser({
    componentName,
    fieldType,
    pageSectionsArray,
    unparsed: 'This is the test case for %FieldType%',
  })
  expect(result).toEqual('This is the test case for SomeFieldType')
})
test('Parse %field-type%', () => {
  result = parser({
    componentName,
    fieldType,
    pageSectionsArray,
    unparsed: 'This is the test case for %field-type%',
  })
  expect(result).toEqual('This is the test case for some-field-type')
})

test('Parse %field-name% and %component-name%', () => {
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

test('Parse %createPageQuery%', () => {
  result = parser({
    componentName,
    graphQL: {
      createPageQuery: 'global',
    },
    unparsed: 'This is the test case for %createPageQuery%',
  })
  expect(result).toEqual('This is the test case for global')
})
