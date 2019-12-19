import {
  getAsset,
  removeAsset,
  unPublishAsset,
} from '../../contentful-api/asset.js'
import {
  getClient,
  getEnvironment,
  getSpace,
} from '../../contentful-api/init.js'
import { Context } from '../../types/context.js'

const finish = async (context: Context) => {
  console.log(`Succesfully deleted asset`)
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const deleteAsset = async (context: Context) => {
  console.log(`Deleting demo asset =============`)
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)

    await getAsset(context)
    await unPublishAsset(context)
    await removeAsset(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}
