import { WheelroomComponents } from '@wheelroom/wheelroom'
import {
  ContentfulContent,
  ContentfulContentField,
  ContentfulContentSet,
  WheelroomContent,
  WheelroomContentSet,
} from '../../types/content-set'

export const cfContentSetFromWrContentSet = (
  wrContentSet: WheelroomContentSet,
  wrComponents: WheelroomComponents
): ContentfulContentSet => {
  const contentSet: ContentfulContentSet = []

  Object.entries(wrContentSet).forEach(
    ([componentId, wrContent]: [string, WheelroomContent]) => {
      const content: ContentfulContent = {
        componentId,
        dependsOnModels: [],
        fields: {},
        model: wrContent.model,
      }
      Object.entries(wrContent.fields).forEach(
        ([fieldName, initialContent]: [string, string]) => {
          if (!(wrContent.model in wrComponents)) {
            // Most probably the filter argument is active
            return
          }
          const wrField = wrComponents[wrContent.model].fields[fieldName]
          if (
            wrField &&
            typeof wrField === 'object' &&
            'allowedComponents' in wrField
          ) {
            if (Array.isArray(wrField.allowedComponents)) {
              content.dependsOnModels.push(...wrField.allowedComponents)
            } else {
              content.dependsOnModels.push(wrField.allowedComponents)
            }
          }
          content.fields[fieldName] = {
            initialContent,
            type: wrField.type,
          } as ContentfulContentField
        }
      )
      contentSet.push(content)
    }
  )
  return contentSet
}
