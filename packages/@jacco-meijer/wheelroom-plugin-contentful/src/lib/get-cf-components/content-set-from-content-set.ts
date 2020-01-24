import { WheelroomComponents } from '@jacco-meijer/wheelroom'
import {
  ContentfulContent,
  ContentfulContentField,
  ContentfulContentSet,
  WheelroomContent,
  WheelroomContentSet,
} from '../../types/content-set'

export const contentSetFromContentSet = (
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
          const wrField = wrComponents[wrContent.model].fields[fieldName]
          if ('allowedComponents' in wrField) {
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
