import { WheelroomComponent, WheelroomComponents } from './wheelroom-components'
import { FieldType } from './wheelroom-fields'

export interface Cases {
  /** The camelCase version of the string */
  camelCase: string
  /** The kebabCase version of the string */
  kebabCase: string
  /** The lowerCase version of the string */
  lowerCase: string
  /** The pascalCase version of the string */
  pascalCase: string
  /** The sentenceCase version of the string */
  sentenceCase: string
}

export type ReplaceFunction = (
  replaceVars: any,
  replaceParams: ReplaceParams
) => string

export interface ReplaceFunctionContext {
  /** function that returns the new value of the search string */
  replace: ReplaceFunction
  /** The search string the replace function returns a value for */
  search: string
  /** When set, returns a string that was build by array.join(', ') */
  returnsArray?: boolean
}

export interface ReplaceFunctionsLookup {
  [search: string]: ReplaceFunctionContext
}

export type ReplaceFunctionsList = ReplaceFunctionContext[]

export interface ReplaceVars {
  component?: WheelroomComponent
  components?: WheelroomComponents
  componentName?: string
  field?: FieldType
  fieldName?: string
  fieldType?: string
  locale?: string
}

export interface ReplaceParams {
  [name: string]: string
}
