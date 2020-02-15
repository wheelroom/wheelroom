import queryString from 'query-string'
import * as contentful from 'contentful'
import { normalize } from './normalize'

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
    .getEntry(queryParams.preview)
    .then(entry => {
      console.log('CF ENTRY', entry)
      const contentTypeId = entry.sys.contentType.sys.id

      client
        .getContentTypes(contentTypeId)
        .then((contentTypes) => {
          const contentTypeFields = contentTypes.items.reduce(
            (outerResult: any, contentType: any) => {
              outerResult[contentType.name] = contentType.fields.reduce(
                (innerResult: any, field: any) => {
                  innerResult[field.id] = field
                  return innerResult
                },
                {}
              )
              return outerResult
            },
            {}
          )

          const normalized = normalize(
            contentTypeFields,
            contentTypeId,
            entry.fields,
            props.data.page
          )
        })
        .catch(console.error)

      // console.log('EXISTING', props.data.page)
      // console.log('NORMALIZED', normalized)
    })
    .catch(err => console.log(err))
}
