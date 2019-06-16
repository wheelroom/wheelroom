import { deleteEntry, getEntry, unPublishEntry } from '../model-api/content'
import { getClient, getEnvironment, getSpace } from '../model-api/init'
import { ModelApiContext } from '../types/model-api-context'
import { deleteAsset } from './delete-asset'

const finish = async (context: ModelApiContext) => {
  console.log('Succesfully deleted content for:', context.currentModel.type)
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const deleteContentForModel = async (context: ModelApiContext) => {
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

export const deleteContent = async (context: ModelApiContext) => {
  for (const componentConfig of context.componentConfigs) {
    console.log(
      'Deleting content for model',
      componentConfig.model.type,
      '============='
    )
    context.entry = null
    context.fields = {}
    context.currentModel = componentConfig.model
    await deleteContentForModel(context)
  }
  await deleteAsset(context)
}
