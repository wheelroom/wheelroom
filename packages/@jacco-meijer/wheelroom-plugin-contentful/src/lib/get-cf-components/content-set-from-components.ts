import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@jacco-meijer/wheelroom'
import {
  ContentfulContent,
  ContentfulContentField,
  ContentfulContentSet,
} from '../../types/content-set'

export const contentSetFromComponents = (
  wrComponents: WheelroomComponents
): ContentfulContentSet => {
  const contentSet: ContentfulContentSet = []

  Object.entries(wrComponents).forEach(
    ([componentName, wrComponent]: [string, WheelroomComponent]) => {
      const content: ContentfulContent = {
        componentId: componentName,
        fields: {},
        model: componentName,
      }
      Object.entries(wrComponent.fields).forEach(
        ([fieldName, field]: [string, FieldType]) => {
          content.fields[fieldName] = {
            initialContent: field.initialContent,
            type: field.type,
          } as ContentfulContentField
        }
      )
      contentSet.push(content)
    }
  )
  return contentSet
}
