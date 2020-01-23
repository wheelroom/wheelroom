import {
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { ContentfulComponents } from '../../types/contentful-components'
import { ContentfulFieldDefinitions } from '../../types/contentful-field-definitions'
import { processWrComponents } from './process-wr-components'

export interface ContentSet {
  [modelName: string]: {
    fields: {
      [fieldName: string]: any
    }
    model: string
  }
}

export const generateContentfulComponents = (
  wheelroomComponents: WheelroomComponents,
  fieldDefinitions: ContentfulFieldDefinitions,
  contentSet?: ContentSet
): ContentfulComponents => {
  const components: ContentfulComponents = {}
  // Loop through all configured wheelroom components
  Object.entries(wheelroomComponents).forEach(
    ([componentName, wheelroomComponent]: [string, WheelroomComponent]) => {
      processWrComponents({
        componentName,
        components,
        contentSet,
        fieldDefinitions,
        wheelroomComponent,
        wheelroomComponents,
      })
    }
  )

  return components
}
