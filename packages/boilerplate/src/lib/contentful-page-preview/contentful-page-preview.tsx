import queryString from 'query-string'
import * as contentful from 'contentful'
import { getGatsbyFields } from './get-gatsby-fields'
import { contentModelByIds } from './content-model-by-ids'

export const contentfulPagePreview = (props: any) => {
  const secrets = props.data.site.siteMetadata.secrets
  const queryParams = queryString.parse(props.location.search)
  if (!('preview' in queryParams)) {
    return
  }
  if (!(queryParams.preview && typeof queryParams.preview === 'string')) {
    return
  }

  const cfConfig: any = {
    accessToken: secrets.previewToken,
    host: 'preview.contentful.com',
    space: secrets.spaceId,
  }
  // Pass CONTENTFUL_ENVIRONMENT when available
  if (secrets.environment) {
    cfConfig.environment = secrets.environment
  }

  if (!(cfConfig.accessToken && cfConfig.space)) {
    console.log(
      `Could not initialize Contentful client:
AccessToken: ${cfConfig.accessToken}
Space; ${cfConfig.space}`
    )
    return
  }
  const client = contentful.createClient(cfConfig)

  console.log(`Fetching preview data for page: ${queryParams.preview}`)
  client
    .getEntries({
      'sys.id': queryParams.preview,
      include: 3,
    })
    .then(entries => {
      const entry = JSON.parse(entries.stringifySafe()).items[0]
      // const entry = entries.items[0]
      const contentTypeId = entry.sys.contentType.sys.id

      client
        .getContentTypes(contentTypeId)
        .then(contentTypes => {
          const contentModel = contentModelByIds(contentTypes)
          const normalized = getGatsbyFields(contentModel, entry)
          console.log('G PAGE', props.data.page)
          console.log('NORMALIZED', normalized)
        })
        .catch(console.error)
    })
    .catch(err => console.log(err))
}
