import { fieldFilter } from '../lib/field-filter'
import { Context } from '../types/context'
import { Field } from '../types/contentful-components'

export const getEditorInterface = async (
  context: Context,
  componentName: string
) => {
  // If we don't have a contentType there's nothing to do here
  if (context.contentfulApi.contentType === null) {
    return
  }
  context.contentfulApi.editorInterface = await context.contentfulApi.environment.getEditorInterfaceForContentType(
    context.currentModel.model.type
  )
  console.log(`Fetched editor interface`)
}

const getModelFieldById = (context: Context, fieldIdLookup: string): any => {
  const result = Object.entries(context.currentModel.model.fields).find(
    ([fieldId, field]: any) => {
      return fieldId === fieldIdLookup
    }
  )
  return result || [fieldIdLookup, {}]
}

export const updateEditorInterface = async (
  context: Context,
  componentName: string
) => {
  // If we don't have a editorInterface there's nothing to do here
  if (context.contentfulApi.editorInterface === null) {
    return
  }
  context.contentfulApi.editorInterface.controls.forEach((control: any) => {
    const [modelFieldId, modelField]: [any, Field] = getModelFieldById(
      context,
      control.fieldId
    )
    const skipField = !fieldFilter(context.currentModel.modelOptions)([
      modelFieldId,
      undefined,
    ])
    if (!modelField.widgetId || skipField) {
      return
    }
    console.log(`Updating editor interface for field ${modelFieldId}`)
    control.widgetId = modelField.widgetId
    control.settings = modelField.settings
  })
  context.contentfulApi.editorInterface = await context.contentfulApi.editorInterface.update()
}
