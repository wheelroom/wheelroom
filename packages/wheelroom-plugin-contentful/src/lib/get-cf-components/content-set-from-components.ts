import {
  FieldType,
  WheelroomComponent,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import {
  ContentfulContent,
  ContentfulContentField,
  ContentfulContentSet,
} from '../../types/content-set'

export const cfContentSetFromComponents = (
  wrComponents: WheelroomComponents
): ContentfulContentSet => {
  const contentSet: ContentfulContentSet = []

  Object.entries(wrComponents).forEach(
    ([componentName, wrComponent]: [string, WheelroomComponent]) => {
      const content: ContentfulContent = {
        componentId: componentName,
        dependsOnModels: [],
        fields: {},
        model: componentName,
      }
      Object.entries(wrComponent.fields).forEach(
        ([fieldName, field]: [string, FieldType]) => {
          if ('allowedComponents' in field) {
            if (Array.isArray(field.allowedComponents)) {
              content.dependsOnModels.push(...field.allowedComponents)
            } else {
              content.dependsOnModels.push(field.allowedComponents)
            }
          }
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
