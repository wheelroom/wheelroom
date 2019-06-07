import { Context } from '../types/context'
import {
  createEntry,
  getEntry,
  getFields,
  publishEntry,
  updateEntry,
} from './context/content'
import { getClient, getEnvironment, getSpace } from './context/init'
import { createAsset } from './create-asset'

const finish = async (context: Context) => {
  console.log('Succesfully created content for:', context.currentModel.type)
  return context
}

const handleError = error => {
  console.log(error.message)
}

export const createContentForModel = async (context: Context) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)

    getFields(context)
    await getEntry(context)
    await updateEntry(context)
    await createEntry(context)
    await publishEntry(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const createContent = async (context: Context) => {
  await createAsset(context)
  for (const modelConfig of context.modelConfigs) {
    console.log('Creating content for model', modelConfig.name, '=============')
    context.entry = null
    context.fields = {}
    context.currentModel = modelConfig.model
    await createContentForModel(context)
  }
}
