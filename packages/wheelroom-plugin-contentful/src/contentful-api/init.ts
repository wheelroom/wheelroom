import { createClient } from 'contentful-management'
import { Context } from '../types/context'

export const getClient = async (context: Context) => {
  if (context.contentfulApi.contentfulClient) {
    return
  }
  context.contentfulApi.contentfulClient = createClient({
    accessToken:
      process.env.CONTENTFUL_CMA_TOKEN ||
      'process.env.CONTENTFUL_CMA_TOKEN not found',
  })
}

export const getSpace = async (context: Context) => {
  if (context.contentfulApi.space) {
    return
  }
  context.contentfulApi.space = await context.contentfulApi.contentfulClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  )
}

export const getEnvironment = async (context: Context) => {
  if (context.contentfulApi.environment) {
    return
  }
  context.contentfulApi.environment = await context.contentfulApi.space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT
  )
}

export const getLocales = async (context: Context) => {
  console.log(`Getting locales`)
  try {
    const result = await context.contentfulApi.environment.getLocales()
    context.contentfulApi.locales = result.items
    context.contentfulApi.defaultLocale = result.items.find(
      (locale: any) => locale.default
    )
    const locale = context.contentfulApi.defaultLocale.code
    console.log(`Default locale: ${locale}`)
    if (locale !== context.commandLineOptions.locale) {
      console.log(
        `WARNING: Contentful locale (${locale}) differs from command line locale (${context.commandLineOptions.locale})`
      )
    }
  } catch (error) {
    console.log(`Could not fetch locales`)
    context.contentfulApi.locales = null
    context.contentfulApi.defaultLocale = null
  }
}
