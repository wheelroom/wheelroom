import { Context } from '../types/context'
import { deleteEntry, getEntry, unPublishEntry } from './context/content'
import { getClient, getEnvironment, getSpace } from './context/init'
import { deleteAsset } from './delete-asset'

const finish = async (context: Context) => {
  console.log('Succesfully deleted content for:', context.currentModel.type)
  return context
}

const handleError = error => {
  console.log(error.message)
}

export const deleteContentForModel = async (context: Context) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)

    await getEntry(context)
    await unPublishEntry(context)
    await deleteEntry(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const deleteContent = async (context: Context) => {
  for (const modelConfig of context.modelConfigs) {
    console.log('Deleting content for model', modelConfig.name, '=============')
    context.entry = null
    context.fields = {}
    context.currentModel = modelConfig.model
    await deleteContentForModel(context)
  }
  await deleteAsset(context)
}
