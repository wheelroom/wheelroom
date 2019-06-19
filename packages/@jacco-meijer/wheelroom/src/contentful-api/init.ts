// @ts-ignore
import * as contentful from 'contentful-management'
import { ContentfulApiContext } from '../types/contentful-api-context'

export const getClient = async (context: ContentfulApiContext) => {
  if (context.contentfulClient) {
    return
  }
  context.contentfulClient = contentful.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN,
  })
}

export const getSpace = async (context: ContentfulApiContext) => {
  if (context.space) {
    return
  }
  context.space = await context.contentfulClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  )
}

export const getEnvironment = async (context: ContentfulApiContext) => {
  if (context.environment) {
    return
  }
  context.environment = await context.space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT
  )
}
