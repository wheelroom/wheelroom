export type FieldType =
  | 'date'
  | 'dropdown'
  | 'image'
  | 'multipleComponents'
  | 'number'
  | 'richText'
  | 'singleComponent'
  | 'shortText'
  | 'tags'

export interface WheelroomField {
  /** Component for a singleComponent type */
  component?: string
  /**
   * Components for a multipleComponents type, this is a single string when the
   * %pageSectionsArray% varaiable is used
   */
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
  /** Name of the field in CMS */
  name?: string
  /** Makes the field require input */
  required?: boolean
  /** Adds the field to a graphQL fragment and not to the CMS UI */
  system?: boolean
  /** Adds a field must be unique validation */
  unique?: boolean
  /** Simple wheelroom field type */
  type?: FieldType
}

export interface WheelroomFields {
  [fieldName: string]: WheelroomField
}
