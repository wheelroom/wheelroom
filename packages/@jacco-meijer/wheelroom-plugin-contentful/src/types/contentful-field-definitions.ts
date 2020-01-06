import { ContentfulField } from './contentful-fields'

interface FieldTypes {
  [typeName: string]: ContentfulField
}

export interface ContentfulFieldDefinitions {
  /** Defaults used when no value can be found */
  fieldDefaults: ContentfulField
  /** Wheelroom field types that contain the actual Contentful fields */
  fieldTypes: FieldTypes
}
