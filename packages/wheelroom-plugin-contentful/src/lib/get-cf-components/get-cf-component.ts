import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import { getCases } from '@wheelroom/wheelroom'
import { ContentfulComponent } from '../../types/contentful-components'
import { ContentfulFieldDefinitions } from '../../types/contentful-field-definitions'
import { ContentfulFields } from '../../types/contentful-fields'
import { mergeFields } from './merge-fields'

interface ProcessWrComponent {
  componentName: string
  componentId: string
  fieldDefinitions: ContentfulFieldDefinitions
  wrComponent: WheelroomComponent
  wrComponents: WheelroomComponents
}

export const getCfComponent = (context: ProcessWrComponent) => {
  const componentNameCases = getCases(context.componentName)
  const fields: ContentfulFields = {}
  // For each component, loop through all configured wheelroom fields
  Object.entries(context.wrComponent.fields).forEach(
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
          context.fieldDefinitions.fieldTypes[fieldValue.type]
      }
      if (!contentfulFieldDefinition) {
        console.log(
          `Warning: field type '${fieldValue.type}' not found in  Contentful field definitions`
        )
        console.log(
          `Available field types: '${Object.keys(
            context.fieldDefinitions.fieldTypes
          ).join(', ')}'`
        )
        return
      }
      fields[fieldName] = mergeFields({
        cfFieldDefinition: contentfulFieldDefinition,
        componentName: context.componentName,
        fieldName,
        wrComponents: context.wrComponents,
        wrField: fieldValue,
      })
    }
  )
  const cfComponent: ContentfulComponent = {
    componentId: context.componentId,
    description: componentNameCases.sentenceCase,
    displayField: 'title',
    fields,
    modelVersion: context.wrComponent.modelVersion,
    type: componentNameCases.camelCase,
  }
  return cfComponent
}
