import * as fs from 'fs'
import * as path from 'path'
import { ModelApiContext } from '../../types/model-api-context'

const contentType = 'image/jpg'
const file = '../../../assets/wheelroom.jpg'
const fileName = 'wheelroom'
const assetId = 'demoAsset'

export const getAsset = async (context: ModelApiContext) => {
  console.log('Getting asset')
  try {
    context.asset = await context.environment.getAsset(assetId)
  } catch (error) {
    console.log('Could not find asset', assetId)
    context.asset = null
  }
}

export const createNewAsset = async (context: ModelApiContext) => {
  if (context.asset) {
    return
  }
  console.log('Create new asset')
  context.asset = await context.environment.createAssetWithId(assetId, {})
}

export const uploadFile = async (context: ModelApiContext) => {
  console.log('Uploading file')

  context.upload = await context.environment.createUpload({
    contentType,
    file: fs.readFileSync(path.resolve(__dirname, file)),
    fileName,
  })
}

export const updateAsset = async (context: ModelApiContext) => {
  if (!context.asset) {
    return
  }
  console.log('Updating asset')
  context.asset.fields = {
    description: { nl: 'Demo asset with fixed id' },
    file: {
      nl: {
        contentType,
        fileName,
        uploadFrom: {
          sys: {
            id: context.upload.sys.id,
            linkType: 'Upload',
            type: 'Link',
          },
        },
      },
    },
    title: { nl: fileName },
  }
  context.asset = await context.asset.update()
  context.asset = await context.asset.processForAllLocales()
}

export const publishAsset = async (context: ModelApiContext) => {
  await context.asset.publish()
}

export const unPublishAsset = async (context: ModelApiContext) => {
  if (!context.asset) {
    return
  }
  console.log('Unpublishing asset')
  context.asset = await context.asset.unpublish()
}

export const removeAsset = async (context: ModelApiContext) => {
  if (!context.asset) {
    return
  }
  console.log('Deleting asset')
  context.asset = await context.asset.delete()
}
