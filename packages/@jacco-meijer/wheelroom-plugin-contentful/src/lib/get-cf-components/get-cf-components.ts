import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { Content, ContentSet } from '../../types/content-set'
import { ContentfulComponents } from '../../types/contentful-components'
import { ContentfulFieldDefinitions } from '../../types/contentful-field-definitions'
import { getCfComponent } from './get-cf-component'

export const getCfComponents = (
  wrComponents: WheelroomComponents,
  fieldDefinitions: ContentfulFieldDefinitions,
  contentSet?: ContentSet
): ContentfulComponents => {
  const cfComponents: ContentfulComponents = []
  if (contentSet) {
    // Loop through all content, set each field initialContent and process with
    // matching component
    Object.entries(contentSet).forEach(
      ([componentId, content]: [string, Content]) => {
        const matchingWrComponent = wrComponents[content.model]
        const wrComponentWithContent: WheelroomComponent = {
          fields: {},
          modelVersion: matchingWrComponent.modelVersion,
          settings: matchingWrComponent.settings,
        }
        Object.entries(matchingWrComponent.fields).forEach(
          ([fieldName, field]: [string, FieldType]) => {
            // Copy field into new object and set initialContent
            wrComponentWithContent.fields[fieldName] = Object.assign(
              {},
              field,
              {
                initialContent: content.fields[fieldName],
              }
            )
          }
        )
        const cfComponent = getCfComponent({
          componentId,
          componentName: content.model,
          fieldDefinitions,
          wrComponent: wrComponentWithContent,
          wrComponents,
        })
        cfComponents.push(cfComponent)
      }
    )
  } else {
    // Loop through all configured wrComponents, use componentName for componentId
    Object.entries(wrComponents).forEach(
      ([componentName, wrComponent]: [string, WheelroomComponent]) => {
        const cfComponent = getCfComponent({
          componentId: componentName,
          componentName,
          fieldDefinitions,
          wrComponent,
          wrComponents,
        })
        cfComponents.push(cfComponent)
      }
    )
  }
  return cfComponents
}
