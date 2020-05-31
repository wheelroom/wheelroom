import {
  CheckboxTranslations,
  DropdownTranslations,
  Translations,
} from './wheelroom-translations'

export type FieldTypeName =
  | 'date'
  | 'dropdown'
  | 'media'
  | 'longText'
  | 'multipleComponents'
  | 'number'
  | 'richText'
  | 'shortText'
  | 'singleComponent'
  | 'tags'
  | 'checkbox'

export type FieldType =
  | CheckboxField
  | DateField
  | DropdownField
  | LongTextField
  | MediaField
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
  /** Translatio of field names, help text and items */
  translations?: Translations
  /** Allows for extending fields without overriding the fixed FieldType */
  typePostfix?: string
  /** Adds a field must be unique validation */
  unique?: boolean
}

export interface WheelroomFields {
  [fieldName: string]: FieldType
}

export interface CheckboxField extends CommonField {
  /** List of strings for the checkbox field validation */
  items: string[]
  /** Demo content that a field can be filled with */
  initialContent?: string[]
  translations?: CheckboxTranslations
  type: 'checkbox'
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
  translations?: DropdownTranslations
  type: 'dropdown'
}
export interface MediaField extends CommonField {
  /** Sets a default image for the field */
  initialContent?: boolean
  type: 'media'
}
export interface LongTextField extends CommonField {
  /** Initial text */
  initialContent?: string
  type: 'longText'
}
export interface MultipleComponentsField extends CommonField {
  /** Allowed component types */
  allowedComponents: string[]
  /** No creation of Fragments for all allowed, but expand, preventing circular refs */
  expandFragmentRef?: boolean
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
  initialContent?: string
  type: 'richText'
}
export interface ShortTextField extends CommonField {
  /** Initial text */
  initialContent?: string
  /** Optional maximum length for a shorText field */
  maxLength?: number
  type: 'shortText'
}
export interface SingleComponentField extends CommonField {
  /** Allowed component types */
  allowedComponents: string[]
  /** No creation of Fragments for all allowed, but expand, preventing circular refs */
  expandFragmentRef?: boolean
  /** A componentName */
  initialContent?: string
  type: 'singleComponent'
}
export interface TagsField extends CommonField {
  /** Demo content that a field can be filled with */
  initialContent?: string[]
  type: 'tags'
}
