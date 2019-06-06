import { Context } from '../types/context'
import {
  createContentType,
  getContentType,
  publishContentType,
  updateContentType,
} from './context-content-type'
import {
  getEditorInterface,
  updateEditorInterface,
} from './context-editor-interface'
import { getClient, getEnvironment, getSpace } from './context-init'

const finish = async (context: Context) => {
  console.log('Succesfully ran migration for:', context.currentModel.type)
  // console.log('context', context.contentType)
  return context
}

const handleError = error => {
  console.log(error.message)
}

export const applyModel = async (context: Context) => {
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

export const applyModels = async (context: Context) => {
  for (const modelConfig of context.modelConfigs) {
    console.log('Applying model', modelConfig.name, '=============')
    context.contentType = null
    context.currentModel = modelConfig.model
    context.editorInterface = null
    await applyModel(context)
  }
}
