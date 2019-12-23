export interface Backends {
  [backendId: string]: FieldDefinitions
}

interface FieldDefinitions {
  fieldDefinitions: {
    fieldDefaults: {
      helpText: string
      localized: boolean
      required: boolean
      type: string
    }
  }
}
