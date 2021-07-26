import chalk from 'chalk'
import { Environment } from 'contentful-management/types'

export interface PushModelToContentful {
  contentfulEnvironment: Environment
  interfaceTags: Record<string, string>
  contentTypeData: any
}

export const pushModelToContentful = async ({
  contentfulEnvironment,
  interfaceTags,
  contentTypeData,
}: PushModelToContentful) => {
  let contentType
  try {
    // Fetch exiting and update
    contentType = await contentfulEnvironment.getContentType(
      interfaceTags['@type']
    )
    console.log(
      chalk.red(`Contentful API, updating existing ${interfaceTags['@type']}`)
    )
    Object.assign(contentType, contentTypeData)
    contentType = await contentType.update()
  } catch (contentfulError) {
    let errorData
    // We expect a 404, throw other errors if they occur
    try {
      errorData = JSON.parse(contentfulError.message)
      if (errorData.status !== 404) throw contentfulError
    } catch (jsonError) {
      throw contentfulError
    }
    // Create a new content type
    console.log(
      chalk.red(`Contentful API, creating new ${interfaceTags['@type']}`)
    )
    contentType = await contentfulEnvironment.createContentTypeWithId(
      interfaceTags['@type'],
      contentTypeData
    )
  }
  contentType = await contentType.publish()
  return contentType
}
