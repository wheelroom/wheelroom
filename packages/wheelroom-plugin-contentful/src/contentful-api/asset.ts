import fs from 'fs'
import path from 'path'
import { Context } from '../types/context'

const contentType = 'image/jpg'
const file = '../../assets/demo-asset.jpg'
const fileName = 'wheelroom'
const assetId = 'demoAsset'

export const getAsset = async (context: Context) => {
  console.log(`Getting asset`)
  try {
    context.contentfulApi.asset = await context.contentfulApi.environment.getAsset(
      assetId
    )
  } catch (error) {
    console.log(`Could not find asset ${assetId}`)
    context.contentfulApi.asset = null
  }
}

export const createNewAsset = async (context: Context) => {
  if (context.contentfulApi.asset) {
    return
  }
  console.log(`Create new asset`)
  context.contentfulApi.asset = await context.contentfulApi.environment.createAssetWithId(
    assetId,
    {}
  )
}

export const uploadFile = async (context: Context) => {
  console.log(`Uploading file`)

  context.contentfulApi.upload = await context.contentfulApi.environment.createUpload(
    {
      contentType,
      file: fs.readFileSync(path.resolve(__dirname, file)),
      fileName,
    }
  )
}

export const updateAsset = async (context: Context) => {
  if (!context.contentfulApi.asset) {
    return
  }
  console.log(`Updating asset`)
  const defaultLocale = context.contentfulApi.defaultLocale.code
  context.contentfulApi.asset.fields = {
    description: {
      [defaultLocale]: 'Demo asset with fixed id',
    },
    file: {
      [defaultLocale]: {
        contentType,
        fileName,
        uploadFrom: {
          sys: {
            id: context.contentfulApi.upload.sys.id,
            linkType: 'Upload',
            type: 'Link',
          },
        },
      },
    },
    title: { [defaultLocale]: fileName },
  }
  context.contentfulApi.asset = await context.contentfulApi.asset.update()
  context.contentfulApi.asset = await context.contentfulApi.asset.processForAllLocales()
}

export const publishAsset = async (context: Context) => {
  await context.contentfulApi.asset.publish()
}

export const unPublishAsset = async (context: Context) => {
  if (!context.contentfulApi.asset) {
    return
  }
  console.log(`Unpublishing asset`)
  context.contentfulApi.asset = await context.contentfulApi.asset.unpublish()
}

export const removeAsset = async (context: Context) => {
  if (!context.contentfulApi.asset) {
    return
  }
  console.log(`Deleting asset`)
  context.contentfulApi.asset = await context.contentfulApi.asset.delete()
}
