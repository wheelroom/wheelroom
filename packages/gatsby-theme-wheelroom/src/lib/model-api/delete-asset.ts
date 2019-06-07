import { Context } from '../types/context'
import { getAsset, removeAsset, unPublishAsset } from './context/asset'
import { getClient, getEnvironment, getSpace } from './context/init'

const finish = async (context: Context) => {
  console.log('Succesfully deleted asset')
  return context
}

const handleError = error => {
  console.log(error.message)
}

export const deleteAsset = async (context: Context) => {
  console.log('Deleting demo asset =============')
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
