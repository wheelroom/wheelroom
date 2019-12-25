export type FieldType =
  | 'date'
  | 'dropdown'
  | 'image'
  | 'multipleComponents'
  | 'number'
  | 'richText'
  | 'shortText'
  | 'tags'

export interface Field {
  /** Components for a multipleComponents type */
  components?: string | string[]
  /** Help text for an input element */
  helpText?: string
  /** Demo content that a field can be filled with */
  initialContent?: number | string
  /** Items for a dropdown field */
  items?: string[]
  /** Localize the field */
  localized?: boolean
  /** Optional maximum length for a shorText field */
  maxLength?: number
  /** Makes the field require input */
  required?: boolean
  /** Adds the field to a graphQL fragment and not to the CMS UI */
  systemField?: boolean
  /** Adds a field must be unique validation */
  unique?: boolean
  /** Simple wheelroom field type */
  fieldType?: FieldType
}

export interface Fields {
  [fieldName: string]: Field
}
