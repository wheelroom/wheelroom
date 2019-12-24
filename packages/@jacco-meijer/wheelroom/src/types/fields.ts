export type FieldType =
  | 'date'
  | 'image'
  | 'multipleComponents'
  | 'number'
  | 'richText'
  | 'shortText'
  | 'tags'

export interface Field {
  components?: string[]
  helpText?: string
  initialContent?: number
  localized?: boolean
  maxLength?: number
  required?: boolean
  unique?: boolean
  type: FieldType
}

export interface Fields {
  [fieldName: string]: Field
}
