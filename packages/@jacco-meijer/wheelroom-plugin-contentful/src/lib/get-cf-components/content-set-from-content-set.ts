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
        fields: {},
        model: wrContent.model,
      }
      Object.entries(wrContent.fields).forEach(
        ([fieldName, initialContent]: [string, string]) => {
          content.fields[fieldName] = {
            initialContent,
            type: wrComponents[wrContent.model].fields[fieldName].type,
          } as ContentfulContentField
        }
      )
      contentSet.push(content)
    }
  )
  return contentSet
}
