import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import { ContentfulContent, WheelroomContentSet } from '../../types/content-set'
import { ContentfulComponents } from '../../types/contentful-components'
import { ContentfulFieldDefinitions } from '../../types/contentful-field-definitions'
import { contentSetFromComponents } from './content-set-from-components'
import { contentSetFromContentSet } from './content-set-from-content-set'
import { getCfComponent } from './get-cf-component'
import { orderByDependency } from './order-by-dependency'

export const getCfComponents = (
  wrComponents: WheelroomComponents,
  fieldDefinitions: ContentfulFieldDefinitions,
  contentSet?: WheelroomContentSet
): ContentfulComponents => {
  const cfComponents: ContentfulComponents = []

  // If no content is set, create one based on component names and initial
  // content
  let cfContentSet
  if (contentSet) {
    cfContentSet = contentSetFromContentSet(contentSet, wrComponents)
  } else {
    cfContentSet = contentSetFromComponents(wrComponents)
  }

  // Sort content creation so that dependencies get created first
  orderByDependency(cfContentSet)
  const creationOrder = cfContentSet.map(c => c.componentId).join(' < ')
  console.log('Ordered by dependency', creationOrder)

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
