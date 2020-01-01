import { Field } from './fields'

interface FieldTypes {
  [typeName: string]: Field
}

export interface ContentfulFieldDefinitions {
  /** Defaults used when no value can be found */
  fieldDefaults: Field
  /** Wheelroom field types that contain the actual Contentful fields */
  fieldTypes: FieldTypes
}
