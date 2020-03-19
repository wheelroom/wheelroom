import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import {
  ContentfulContent,
  ContentfulContentSet,
} from '../../types/content-set'
import { ContentfulComponents } from '../../types/contentful-components'
import { ContentfulFieldDefinitions } from '../../types/contentful-field-definitions'
import { getCfComponent } from './get-cf-component'

export const getCfComponents = (
  wrComponents: WheelroomComponents,
  fieldDefinitions: ContentfulFieldDefinitions,
  cfContentSet: ContentfulContentSet
): ContentfulComponents => {
  const cfComponents: ContentfulComponents = []

  // Loop through all content, set each field initialContent and process with
  // matching component
  cfContentSet.forEach((cfContent: ContentfulContent) => {
    if (!(cfContent.model in wrComponents)) {
      // Most probably the filter argument is active
      return
    }
    const matchingWrComponent = wrComponents[cfContent.model]
    const wrComponentWithContent: WheelroomComponent = {
      fields: {},
      modelVersion: matchingWrComponent.modelVersion,
      settings: matchingWrComponent.settings,
    }
    Object.entries(matchingWrComponent.fields).forEach(
      ([fieldName, field]: [string, FieldType]) => {
        // Copy field into new object and set initialContent
        wrComponentWithContent.fields[fieldName] = Object.assign({}, field, {
          initialContent: cfContent.fields[fieldName]
            ? cfContent.fields[fieldName].initialContent
            : undefined,
        })
      }
    )
    const cfComponent = getCfComponent({
      componentId: cfContent.componentId,
      componentName: cfContent.model,
      fieldDefinitions,
      wrComponent: wrComponentWithContent,
      wrComponents,
    })
    cfComponents.push(cfComponent)
  })
  return cfComponents
}
