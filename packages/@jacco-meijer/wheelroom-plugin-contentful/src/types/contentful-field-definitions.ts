import { Field } from './contentful-components'

interface AttributeMappings {
  components: string
  helpText: string
  inValidation: string
  initialContent: string
  localized: string
  maxLength: string
  required: string
  type: string
  unique: string
}

interface FieldTypes {
  [typeName: string]: Field
}

export interface ContentfulFieldDefinitions {
  attributeMappings: AttributeMappings
  fieldTypes: FieldTypes
}
