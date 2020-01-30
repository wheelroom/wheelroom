import { ContentfulComponent } from '../types/contentful-components'
import { ContentfulField } from '../types/contentful-fields'
import { Context } from '../types/context'

export const getEditorInterface = async (
  context: Context,
  component: ContentfulComponent
) => {
  // If we don't have a contentType there's nothing to do here
  if (context.contentfulApi.contentType === null) {
    return
  }
  context.contentfulApi.editorInterface = await context.contentfulApi.environment.getEditorInterfaceForContentType(
    component.type
  )
  console.log(`Fetched editor interface`)
}

const getModelFieldById = (
  component: ContentfulComponent,
  fieldIdLookup: string
): any => {
  const result = Object.entries(component.fields).find(([fieldId]: any) => {
    return fieldId === fieldIdLookup
  })
  return result || [fieldIdLookup, {}]
}

export const updateEditorInterface = async (
  context: Context,
  component: ContentfulComponent
) => {
  // If we don't have a editorInterface there's nothing to do here
  if (context.contentfulApi.editorInterface === null) {
    return
  }
  context.contentfulApi.editorInterface.controls.forEach((control: any) => {
    const [modelFieldId, modelField]: [
      any,
      ContentfulField
    ] = getModelFieldById(component, control.fieldId)
    if (!modelField.widgetId) {
      return
    }
    console.log(`Updating editor interface for field ${modelFieldId}`)
    control.widgetId = modelField.widgetId
    control.settings = modelField.settings
  })
  context.contentfulApi.editorInterface = await context.contentfulApi.editorInterface.update()
}
