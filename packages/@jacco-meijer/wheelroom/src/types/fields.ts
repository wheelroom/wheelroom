export interface Field {
  components: string[]
  helpText: string
  initialContent: number
  localized: boolean
  maxLength: number
  required: boolean
  unique: boolean
  type: 'date' | 'image' | 'multipleComponents' | 'number' | 'richText' | 'tags'
}

export interface Fields {
  [fieldName: string]: Field
}
