import {
  deleteEntry,
  getEntry,
  unPublishEntry,
} from '../../contentful-api/content'
import { getClient, getEnvironment, getSpace } from '../../contentful-api/init'
import { ContentfulApiContext } from '../../types/contentful-api-context'
// import { deleteAsset } from './delete-asset'

const finish = async (context: ContentfulApiContext) => {
  console.log(`Succesfully deleted content for: ${context.currentModel.type}`)
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const deleteContentForModel = async (context: ContentfulApiContext) => {
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

export const deleteContent = async (context: ContentfulApiContext) => {
  // for (const componentConfig of context.componentConfigs) {
  //   console.log(
  //     `Deleting content for model ${componentConfig.model.type} =============`
  //   )
  //   context.entry = null
  //   context.fields = {}
  //   context.currentModel = componentConfig.model
  //   await deleteContentForModel(context)
  // }
  // await deleteAsset(context)
}
