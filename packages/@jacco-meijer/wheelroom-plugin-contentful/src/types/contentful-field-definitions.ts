import { ContentfulField } from './contentful-fields'

interface FieldTypes {
  [typeName: string]: ContentfulField
}

export interface ContentfulFieldDefinitions {
  /** Wheelroom field types that contain the actual Contentful fields */
  fieldTypes: FieldTypes
}
