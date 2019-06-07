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

export const updateAsset = async (context: Context) => {
  if (!context.asset) {
    return
  }
  console.log('Updating asset')
  context.asset.fields = context.fields

  context.asset = await context.asset.update()
}

export const uploadFile = async (context: Context) => {
  if (context.asset) {
    return
  }
  console.log('Uploading file')

  context.upload = await context.space.createUpload({
    contentType,
    file: fs.readFileSync(path.resolve(__dirname, file)),
    fileName,
  })
  console.log('Upload done', context.upload)
}

export const createNewAsset = async (context: Context) => {
  if (context.asset) {
    return
  }
  console.log('Create new asset')
  context.asset = await context.space.createAssetWithId(assetId, {
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
    title: {
      nl: fileName,
    },
  })
  console.log('Asset done', context.asset)
  try {
    context.asset = await context.asset.processForAllLocales()
  } catch (error) {
    console.log('Could not process asset', error)
  }

  console.log('Asset done 2', context.asset)
}

export const publishAsset = async (context: Context) => {
  console.log('Asset done 3', context.asset)
  await context.asset.publish()
}
