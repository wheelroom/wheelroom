// @ts-ignore
import * as contentful from 'contentful-management'
import { ModelApiContext } from '../types/model-api-context'

export const getClient = async (context: ModelApiContext) => {
  if (context.contentfulClient) {
    return
  }
  context.contentfulClient = contentful.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN,
  })
}

export const getSpace = async (context: ModelApiContext) => {
  if (context.space) {
    return
  }
  context.space = await context.contentfulClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  )
}

export const getEnvironment = async (context: ModelApiContext) => {
  if (context.environment) {
    return
  }
  context.environment = await context.space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT
  )
}
