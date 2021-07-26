import chalk from 'chalk'
import { Environment } from 'contentful-management/types'

export interface PushFieldsToContentful {
  contentfulEnvironment: Environment
  contentTypeData: any
  interfaceTypeTag: string
}

export const pushFieldsToContentful = async ({
  contentfulEnvironment,
  contentTypeData,
  interfaceTypeTag,
}: PushFieldsToContentful) => {
  let contentType
  try {
    // Fetch exiting and update
    contentType = await contentfulEnvironment.getContentType(interfaceTypeTag)
    console.log(
      chalk.red(`Contentful API, updating existing ${interfaceTypeTag}`)
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
    console.log(chalk.red(`Contentful API, creating new ${interfaceTypeTag}`))
    contentType = await contentfulEnvironment.createContentTypeWithId(
      interfaceTypeTag,
      contentTypeData
    )
  }
  contentType = await contentType.publish()
  return contentType
}
