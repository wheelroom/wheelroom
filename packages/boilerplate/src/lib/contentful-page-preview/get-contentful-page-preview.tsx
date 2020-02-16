import * as contentful from 'contentful'
import { getGatsbyFields } from './get-gatsby-fields'
import { contentModelByIds } from './content-model-by-ids'
import { PreviewSecrets } from './types/preview-secrets'
import { GatsbyFields } from './types/entries'

interface ContentfulPagePreviewProps {
  previewSecrets: PreviewSecrets
  entryId: string
}

export const getContentfulPagePreview = async (
  context: ContentfulPagePreviewProps
): Promise<GatsbyFields | undefined> => {
  const cfConfig: any = {
    accessToken: context.previewSecrets.previewToken,
    host: 'preview.contentful.com',
    space: context.previewSecrets.spaceId,
  }
  if (context.previewSecrets.environment) {
    // Pass CONTENTFUL_ENVIRONMENT only when available
    cfConfig.environment = context.previewSecrets.environment
  }
  if (!(cfConfig.accessToken && cfConfig.space)) {
    console.error(
      `Could not initialize Contentful client:
AccessToken: ${cfConfig.accessToken}
Space; ${cfConfig.space}`
    )
    return
  }
  let client
  try {
    client = contentful.createClient(cfConfig)
    const entries = await client.getEntries({
      'sys.id': context.entryId,
      include: 3,
    })
    const entry = JSON.parse(entries.stringifySafe()).items[0]
    const contentTypeId = entry.sys.contentType.sys.id
    const contentTypes = await client.getContentTypes(contentTypeId)
    const contentModel = contentModelByIds(contentTypes)
    const normalized = getGatsbyFields(contentModel, entry)
    return normalized
  } catch (error) {
    console.log(`Could not fetch ${context.entryId}: ${error.message}`)
  }
  return
}
