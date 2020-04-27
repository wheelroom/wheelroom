import { WheelroomComponents } from '@wheelroom/wheelroom'
import {
  ContentfulContent,
  ContentfulContentField,
  ContentfulContentSet,
} from '../../types/content-set'
import {
  WheelroomReplaceSet,
  ReplaceDetails,
  ReplaceFields,
} from '../../types/replace-sets'

export const cfContentSetFromWrReplaceSet = (
  wrReplaceSet: WheelroomReplaceSet,
  wrComponents: WheelroomComponents
): ContentfulContentSet => {
  const contentSet: ContentfulContentSet = []

  Object.entries(wrReplaceSet).forEach(
    ([model, wrFields]: [string, ReplaceFields]) => {
      const content: ContentfulContent = {
        componentId: '',
        dependsOnModels: [],
        fields: {},
        model,
      }
      Object.entries(wrFields.fields).forEach(
        ([fieldName, replaceDetails]: [string, ReplaceDetails]) => {
          if (!(model in wrComponents)) {
            // Most probably the filter argument is active
            return
          }
          const wrField = wrComponents[model].fields[fieldName]
          content.fields[fieldName] = {
            initialContent: replaceDetails,
            type: wrField.type,
          } as ContentfulContentField
        }
      )
      contentSet.push(content)
    }
  )
  return contentSet
}
