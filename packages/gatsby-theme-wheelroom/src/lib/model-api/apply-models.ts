import { ModelApiContext } from '../types/model-api-context'
import {
  createContentType,
  getContentType,
  publishContentType,
  updateContentType,
} from './context/content-type'
import { getClient, getEnvironment, getSpace } from './context/init'
import {
  getEditorInterface,
  updateEditorInterface,
} from './editor-interface-context'

const finish = async (context: ModelApiContext) => {
  console.log('Succesfully ran migration for:', context.currentModel.type)
  return context
}

const handleError = error => {
  console.log(error.message)
}

export const applyModel = async (context: ModelApiContext) => {
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

export const applyModels = async (context: ModelApiContext) => {
  for (const componentConfig of context.componentConfigs) {
    console.log('Applying model', componentConfig.componentId, '=============')
    context.contentType = null
    context.currentModel = componentConfig.model
    context.editorInterface = null
    await applyModel(context)
  }
}
