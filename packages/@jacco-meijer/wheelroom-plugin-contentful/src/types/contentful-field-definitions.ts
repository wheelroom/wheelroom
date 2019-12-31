import { Field } from './contentful-components'

interface AttributeMappings {
  [attributeName: string]: string
  components: string
  helpText: string
  items: string
  localized: string
  maxLength: string
  required: string
  unique: string
}

type SystemAttribute = 'system' | 'type'

interface FieldTypes {
  [typeName: string]: Field
}

export interface ContentfulFieldDefinitions {
  /** Where to map the Wheelrooom field attribute into the Contentful field */
  attributeMappings: AttributeMappings
  /** Wheelroom field types that contain the actual Contentful fields */
  fieldTypes: FieldTypes
  /** System attributes that do not need to be mapped like the  ones in attributeMappings */
  systemAttributes: SystemAttribute[]
}
