import {
  createNewAsset,
  getAsset,
  publishAsset,
  updateAsset,
  uploadFile,
} from '../../contentful-api/asset'
import {
  getClient,
  getEnvironment,
  getSpace,
} from '../../contentful-api/init'
import { Context } from '../../types/context'

const finish = async (context: Context) => {
  console.log(`Succesfully created asset`)
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const createAsset = async (context: Context) => {
  if (Object.keys(context.components).length < 1) {
    return
  }
  console.log(`Creating demo asset =============`)

  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)
    await getAsset(context)
    await createNewAsset(context)
    await uploadFile(context)
    await updateAsset(context)
    await publishAsset(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}
