import * as fs from 'fs'
import * as path from 'path'
import { Context } from '../../types/context'

const contentType = 'image/jpg'
const file = '../../../assets/wheelroom.jpg'
const fileName = 'wheelroom'
const assetId = 'demoAsset'

export const getAsset = async (context: Context) => {
  console.log('Getting asset')
  try {
    context.asset = await context.space.getAsset(assetId)
  } catch (error) {
    console.log('Could not find asset', assetId)
    context.asset = null
  }
}

export const createNewAsset = async (context: Context) => {
  if (context.asset) {
    return
  }
  console.log('Create new asset')
  context.asset = await context.space.createAssetWithId(assetId, {})
}

export const uploadFile = async (context: Context) => {
  console.log('Uploading file')

  context.upload = await context.space.createUpload({
    contentType,
    file: fs.readFileSync(path.resolve(__dirname, file)),
    fileName,
  })
}

export const updateAsset = async (context: Context) => {
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

export const publishAsset = async (context: Context) => {
  await context.asset.publish()
}
