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
    contentType = await contentfulEnvironment.createContentTypeWithId(
      interfaceTypeTag,
      contentTypeData
    )
  }
  contentType = await contentType.publish()
  return contentType
}
