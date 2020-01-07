export type FieldTypeName =
  | 'date'
  | 'dropdown'
  | 'image'
  | 'longText'
  | 'multipleComponents'
  | 'number'
  | 'richText'
  | 'shortText'
  | 'singleComponent'
  | 'tags'

export type FieldType =
  | DateField
  | DropdownField
  | ImageField
  | LongTextField
  | MultipleComponentsField
  | NumberField
  | RichTextField
  | ShortTextField
  | SingleComponentField
  | TagsField

export interface CommonField {
  /** Help text for an input element */
  helpText?: string
  /** Localize the field */
  localized?: boolean
  /** Name of the field in CMS */
  name?: string
  /** Makes the field require input */
  required?: boolean
  /** Do not create this field at the backend */
  system?: boolean
  /** Adds a field must be unique validation */
  unique?: boolean
}

export interface WheelroomFields {
  [fieldName: string]: FieldType
}

export interface DateField extends CommonField {
  /** Date string, e.g. 2019-06-03T00:00+01:00 */
  initialContent?: string
  type: 'date'
}
export interface DropdownField extends CommonField {
  /** List of strings for the dropdown field */
  items: string[]
  /** One of the item strings */
  initialContent?: string
  type: 'dropdown'
}
export interface ImageField extends CommonField {
  /** Sets a default image for the field */
  initialContent?: boolean
  type: 'image'
}
export interface LongTextField extends CommonField {
  /** Initial text */
  initialContent?: string
  type: 'longText'
}
export interface MultipleComponentsField extends CommonField {
  /** Allowed component types */
  allowedComponents: string[]
  /** List containing componentNames */
  initialContent?: string[]
  type: 'multipleComponents'
}
export interface NumberField extends CommonField {
  /** Initial number */
  initialContent?: number
  type: 'number'
}
export interface RichTextField extends CommonField {
  /** Initial text */
  initialContent?: number | string | string[]
  type: 'richText'
}
export interface ShortTextField extends CommonField {
  /** Initial text */
  initialContent?: number | string | string[]
  /** Optional maximum length for a shorText field */
  maxLength?: number
  type: 'shortText'
}
export interface SingleComponentField extends CommonField {
  /** Allowed component types */
  allowedComponents: string[]
  /** A componentName */
  initialContent?: string
  type: 'singleComponent'
}
export interface TagsField extends CommonField {
  /** Demo content that a field can be filled with */
  initialContent?: string[]
  type: 'tags'
}
