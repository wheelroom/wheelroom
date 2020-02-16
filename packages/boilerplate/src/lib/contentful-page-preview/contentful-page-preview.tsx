import * as contentful from 'contentful'
import { getGatsbyFields } from './get-gatsby-fields'
import { contentModelByIds } from './content-model-by-ids'

export const contentfulPagePreview = async (
  pageTemplateProps: any,
  entryId: string
) => {
  const secrets = pageTemplateProps.data.site.siteMetadata.secrets

  const cfConfig: any = {
    accessToken: secrets.previewToken,
    host: 'preview.contentful.com',
    space: secrets.spaceId,
  }
  if (secrets.environment) {
    // Pass CONTENTFUL_ENVIRONMENT when available
    cfConfig.environment = secrets.environment
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
      'sys.id': entryId,
      include: 3,
    })
    const entry = JSON.parse(entries.stringifySafe()).items[0]
    const contentTypeId = entry.sys.contentType.sys.id
    const contentTypes = await client.getContentTypes(contentTypeId)
    const contentModel = contentModelByIds(contentTypes)
    const normalized = getGatsbyFields(contentModel, entry)
    return normalized
  } catch (error) {
    console.log(`Could not fetch ${entryId}: ${error.message}`)
  }
}
