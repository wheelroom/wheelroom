import * as contentful from 'contentful-management'
import { Context } from '../../types/context'

export const getClient = async (context: Context) => {
  if (context.contentfulClient) {
    return
  }
  context.contentfulClient = contentful.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN,
  })
}

export const getSpace = async (context: Context) => {
  if (context.space) {
    return
  }
  context.space = await context.contentfulClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  )
}

export const getEnvironment = async (context: Context) => {
  if (context.environment) {
    return
  }
  context.environment = await context.space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT
  )
}
