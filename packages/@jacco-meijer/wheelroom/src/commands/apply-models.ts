import {
  createContentType,
  getContentType,
  publishContentType,
  updateContentType,
} from '../contentful-api/content-type'
import {
  getEditorInterface,
  updateEditorInterface,
} from '../contentful-api/editor-interface'
import { getClient, getEnvironment, getSpace } from '../contentful-api/init'
import { ContentfulApiContext } from '../types/contentful-api-context'

const finish = async (context: ContentfulApiContext) => {
  console.log(`Succesfully ran migration for ${context.currentModel.type}`)
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const applyModel = async (context: ContentfulApiContext) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)
    await getContentType(context)
    await updateContentType(context)
    await createContentType(context)
    await publishContentType(context)
    await getEditorInterface(context)
    await updateEditorInterface(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const applyModels = async (context: ContentfulApiContext) => {
  for (const componentConfig of context.componentConfigs) {
    console.log(`Applying model ${componentConfig.model.type} =============`)
    context.contentType = null
    context.currentModel = componentConfig.model
    context.editorInterface = null
    context.variationField = {
      overwriteVariations: componentConfig.overwriteVariations,
      variations: componentConfig.variations,
    }
    await applyModel(context)
  }
}
