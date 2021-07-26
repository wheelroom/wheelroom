import contentful from 'contentful-management'

export const getContentfulEnvironment = async () => {
  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN!,
  })
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!)
  const environment = await space.getEnvironment('master')
  return environment
}
