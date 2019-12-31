import {
  Field as WheelroomField,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { getCases } from '@jacco-meijer/wheelroom'
import {
  ContentfulComponent,
  ContentfulComponents,
  Field as ContentfulField,
  Fields as ContentfulFields,
} from '../types/contentful-components'
import { ContentfulFieldDefinitions } from '../types/contentful-field-definitions'

export const generateContentfulComponents = (
  wheelroomComponents: WheelroomComponents,
  fieldDefinitions: ContentfulFieldDefinitions
): ContentfulComponents => {
  console.log('merging', wheelroomComponents)
  console.log('and', fieldDefinitions)
  const components: ContentfulComponents = {}
  // Loop through all configured wheelroom components
  Object.entries(wheelroomComponents).forEach(
    ([componentName, wheelroomComponent]: [string, WheelroomComponent]) => {
      const componentNameCases = getCases(componentName)
      const fields: ContentfulFields = {}
      // For each component, loop through all configured wheelroom fields
      Object.entries(wheelroomComponent.fields).forEach(
        ([fieldName, fieldValue]: [string, WheelroomField]) => {
          if (fieldValue.system) {
            // Skip system fields
            return
          }
          // Create a working copy based on the Contentful field definition
          const workingField = Object.assign(
            {},
            fieldDefinitions.fieldTypes[fieldValue.type!]
          )
          // TODO: Parse all fields
          // TODO: Deep copy into working field

          // Loop through all attributes of a field and map onto contentful working field
          Object.entries(fieldValue).forEach(
            ([attributeName, attributeValue]: [string, string]) => {
              if (attributeName in fieldDefinitions.systemAttributes) {
                // Skip system attributes like 'system' and 'type'
                return
              }
              if (attributeName in fieldDefinitions.attributeMappings) {
                // Map attributes that have a mapping into the Contentful field
                console.log(
                  'path:',
                  fieldDefinitions.attributeMappings[attributeName]
                )
                return
              }
              // All other attributes go into the root of the Contentful field
              workingField[attributeName] = attributeValue
            }
          )
          // Copy all workFields into a new ContentfulField
          // ...
          let field: ContentfulField
          fields[fieldName] = field
        }
      )
      const component: ContentfulComponent = {
        description: componentNameCases.sentenceCase,
        displayField: 'title',
        fields,
        modelVersion: wheelroomComponent.modelVersion,
        type: componentNameCases.camelCase,
      }
      components[componentName] = component
    }
  )
  return components
}
