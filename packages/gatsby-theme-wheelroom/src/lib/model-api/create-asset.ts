import { Context } from '../types/context'
import {
  createNewAsset,
  getAsset,
  publishAsset,
  updateAsset,
  uploadFile,
} from './context/asset'
import { getClient, getEnvironment, getSpace } from './context/init'

const finish = async (context: Context) => {
  console.log('Succesfully created content for:', context.currentModel.type)
  return context
}

const handleError = error => {
  console.log(error.message)
}

export const createAsset = async (context: Context) => {
  console.log('Creating demo asset =============')
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)
    await getAsset(context)
    await updateAsset(context)
    await uploadFile(context)
    await createNewAsset(context)
    await publishAsset(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}
