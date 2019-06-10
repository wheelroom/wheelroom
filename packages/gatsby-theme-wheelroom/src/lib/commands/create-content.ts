import {
  createEntry,
  getEntry,
  getFields,
  publishEntry,
  updateEntry,
} from '../model-api/content'
import { getClient, getEnvironment, getSpace } from '../model-api/init'
import { ModelApiContext } from '../types/model-api-context'
import { createAsset } from './create-asset'

const finish = async (context: ModelApiContext) => {
  console.log('Succesfully created content for:', context.currentModel.type)
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const createContentForModel = async (context: ModelApiContext) => {
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

export const createContent = async (context: ModelApiContext) => {
  await createAsset(context)
  for (const componentConfig of context.componentConfigs) {
    console.log(
      'Creating content for model',
      componentConfig.componentId,
      '============='
    )
    context.entry = null
    context.fields = {}
    context.currentModel = componentConfig.model
    await createContentForModel(context)
  }
}
