import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { ContentfulComponents } from '../../types/contentful-components'
import { ContentfulFieldDefinitions } from '../../types/contentful-field-definitions'
import { processWrComponent } from './process-wr-component'

interface Content {
  fields: {
    [fieldName: string]: any
  }
  model: string
}

export interface ContentSet {
  [modelName: string]: Content
}

export const generateContentfulComponents = (
  wheelroomComponents: WheelroomComponents,
  fieldDefinitions: ContentfulFieldDefinitions,
  contentSet?: ContentSet
): ContentfulComponents => {
  const components: ContentfulComponents = {}
  if (contentSet) {
    // Loop through all content, set each field initialContent and process with
    // matching component
    Object.entries(contentSet).forEach(
      ([componentId, content]: [string, Content]) => {
        const matchingWrComponent = wheelroomComponents[content.model]
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
        const component = processWrComponent({
          componentName: content.model,
          fieldDefinitions,
          wheelroomComponent: wrComponentWithContent,
          wheelroomComponents,
        })
        components[componentId] = component
      }
    )
  } else {
    // Loop through all configured wheelroom components, set componentId to componentName
    Object.entries(wheelroomComponents).forEach(
      ([componentName, wheelroomComponent]: [string, WheelroomComponent]) => {
        const component = processWrComponent({
          componentName,
          fieldDefinitions,
          wheelroomComponent,
          wheelroomComponents,
        })
        components[componentName] = component
      }
    )
  }
  return components
}
