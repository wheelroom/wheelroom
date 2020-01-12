import { WheelroomComponent, WheelroomComponents } from './wheelroom-components'
import { FieldType } from './wheelroom-fields'

export interface Cases {
  camelCase: string
  kebabCase: string
  lowerCase: string
  pascalCase: string
  sentenceCase: string
}

export type ReplaceFunction = (rv: ReplaceVars, rp: ReplaceParams) => string

export interface ReplaceFunctionContext {
  replace: ReplaceFunction
  search: string
  returnsArray?: boolean
}

export interface ReplaceFunctionsLookup {
  [search: string]: ReplaceFunctionContext
}

export type ReplaceFunctionsList = ReplaceFunctionContext[]

export interface ReplaceVars {
  cases: {
    componentName?: Cases
    fieldName?: Cases
    fieldType?: Cases
  }
  component?: WheelroomComponent
  components?: WheelroomComponents
  componentName: string
  field?: FieldType
  fieldName?: string
  fieldType?: string
}

export interface ReplaceParams {
  [name: string]: string
}
