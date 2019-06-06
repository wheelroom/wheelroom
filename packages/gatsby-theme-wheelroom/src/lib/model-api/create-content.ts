import { Context } from '../types/context'
import { getClient, getEnvironment, getSpace } from './context-init'

const finish = async (context: Context) => {
  console.log('Succesfully created content for:', context.currentModel.type)
  return context
}

const handleError = error => {
  console.error(error.message)
}

const getEntry = async (context: Context) => {
  const entry = await context.space.getEntry('7x9nXQer0V3i5hGxEoiUsm')
  const formatted = JSON.stringify(entry, null, 2)

  console.log(formatted)
}

export const createContentForModel = async (context: Context) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)
    await getEntry(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const createContent = async (context: Context) => {
  for (const modelConfig of context.modelConfigs) {
    console.log('Creating content for model', modelConfig.name, '=============')
    context.contentType = null
    context.currentModel = modelConfig.model
    context.editorInterface = null
    await createContentForModel(context)
  }
}
