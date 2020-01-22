/**
 * Draft setup of what config should look like
 *
 * https://stackoverflow.com/questions/45771307/typescript-dynamically-create-interface
 *
 */

import {
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
} from '@jacco-meijer/wheelroom'

import { configComponents } from './src/fixtures/config-components'

type MapSchemaTypes = {
  date: DateField
  dropDown: DropdownField
  image: ImageField
  longText: LongTextField
  multipleComponents: MultipleComponentsField
  number: NumberField
  richText: RichTextField
  shortText: ShortTextField
  singleComponent: SingleComponentField
  tags: TagsField
}
type MapSchema<T extends Record<string, keyof MapSchemaTypes>> = {
  [K in keyof T]: MapSchemaTypes[T[K]]
}

function asSchema<T extends Record<string, keyof MapSchemaTypes>>(t: T): T {
  return t
}
const testSchema = asSchema({ name: 'shortText', age: 'longText' })
type MyScheme = MapSchema<typeof testSchema>

const test: MyScheme = {
  name: {
    type: 'shortText',
  },
  age: {
    type: 'longText',
  },
}

const config = {
  pageName: {
    model: 'page',
    fields: {
      path: '/',
      pathName: 'home',
      heading: '',
    },
  },
}
