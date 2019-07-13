import * as fs from 'fs'
import * as path from 'path'
import { ContentfulApiContext } from '../types/contentful-api-context'

const contentType = 'image/jpg'
const file = '../../assets/wheelroom.jpg'
const fileName = 'wheelroom'
const assetId = 'demoAsset'

export const getAsset = async (context: ContentfulApiContext) => {
  console.log(`Getting asset`)
  try {
    context.asset = await context.environment.getAsset(assetId)
  } catch (error) {
    console.log(`Could not find asset ${assetId}`)
    context.asset = null
  }
}

export const createNewAsset = async (context: ContentfulApiContext) => {
  if (context.asset) {
    return
  }
  console.log(`Create new asset`)
  context.asset = await context.environment.createAssetWithId(assetId, {})
}

export const uploadFile = async (context: ContentfulApiContext) => {
  console.log(`Uploading file`)

  context.upload = await context.environment.createUpload({
    contentType,
    file: fs.readFileSync(path.resolve(__dirname, file)),
    fileName,
  })
}

export const updateAsset = async (context: ContentfulApiContext) => {
  // if (!context.asset) {
  //   return
  // }
  // console.log(`Updating asset`)
  // context.asset.fields = {
  //   description: { [context.defaultLocale]: 'Demo asset with fixed id' },
  //   file: {
  //     [context.defaultLocale]: {
  //       contentType,
  //       fileName,
  //       uploadFrom: {
  //         sys: {
  //           id: context.upload.sys.id,
  //           linkType: 'Upload',
  //           type: 'Link',
  //         },
  //       },
  //     },
  //   },
  //   title: { [context.defaultLocale]: fileName },
  // }
  // context.asset = await context.asset.update()
  // context.asset = await context.asset.processForAllLocales()
}

export const publishAsset = async (context: ContentfulApiContext) => {
  await context.asset.publish()
}

export const unPublishAsset = async (context: ContentfulApiContext) => {
  if (!context.asset) {
    return
  }
  console.log(`Unpublishing asset`)
  context.asset = await context.asset.unpublish()
}

export const removeAsset = async (context: ContentfulApiContext) => {
  if (!context.asset) {
    return
  }
  console.log(`Deleting asset`)
  context.asset = await context.asset.delete()
}
