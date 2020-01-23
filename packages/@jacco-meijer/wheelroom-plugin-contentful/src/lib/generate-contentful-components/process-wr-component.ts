import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { getCases } from '@jacco-meijer/wheelroom'
import { ContentfulComponent } from '../../types/contentful-components'
import { ContentfulFieldDefinitions } from '../../types/contentful-field-definitions'
import { ContentfulFields } from '../../types/contentful-fields'
import { mergeFields } from './merge-fields'

interface ProcessWrComponent {
  componentName: string
  fieldDefinitions: ContentfulFieldDefinitions
  wheelroomComponent: WheelroomComponent
  wheelroomComponents: WheelroomComponents
}

export const processWrComponent = (context: ProcessWrComponent) => {
  const componentNameCases = getCases(context.componentName)
  const fields: ContentfulFields = {}
  // For each component, loop through all configured wheelroom fields
  Object.entries(context.wheelroomComponent.fields).forEach(
    ([fieldName, fieldValue]: [string, FieldType]) => {
      if (fieldValue.system) {
        // Skip system fields
        return
      }
      let contentfulFieldDefinition
      // If field.typePostfix is present, use it
      if (
        'typePostfix' in fieldValue &&
        fieldValue.type + fieldValue.typePostfix in
          context.fieldDefinitions.fieldTypes
      ) {
        contentfulFieldDefinition =
          context.fieldDefinitions.fieldTypes[
            fieldValue.type + fieldValue.typePostfix
          ]
      } else {
        // Field.typePostfix not present, use field.type
        contentfulFieldDefinition =
          context.fieldDefinitions.fieldTypes[fieldValue.type!]
      }
      fields[fieldName] = mergeFields({
        cfFieldDefinition: contentfulFieldDefinition,
        componentName: context.componentName,
        fieldName,
        wrComponents: context.wheelroomComponents,
        wrField: fieldValue,
      })
    }
  )
  const component: ContentfulComponent = {
    description: componentNameCases.sentenceCase,
    displayField: 'title',
    fields,
    modelVersion: context.wheelroomComponent.modelVersion,
    type: componentNameCases.camelCase,
  }
  return component
}
