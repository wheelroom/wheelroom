import { getGatsbyField } from './get-gatsby-field'
import { ContentfulEntry, GatsbyFields } from './types/entries'

/**
 * Contentful data exists in two formats here:
 *
 * 1) Contentful -> gatsby-source-contentful -> gatsby/graphql -> props
 * 2) Contentful -> client.getEntry
 *
 * In order to merge the two formats, all data is normalized to format #1.
 *
 */

const PREFIX = 'Contentful'

const firstUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const getGatsbyFields = (
  contentModel: any,
  cfEntry: ContentfulEntry
): GatsbyFields => {
  const contentTypeId = cfEntry.sys.contentType.sys.id
  const convertedFields: GatsbyFields = {
    __typename: PREFIX + firstUpperCase(contentTypeId),
  }
  // Loop all Contentful fields and convert to Gatsby
  Object.entries(cfEntry.fields).forEach(
    ([fieldName, cfFieldValue]: [string, any]) => {
      convertedFields[fieldName] = getGatsbyField(
        contentModel,
        contentTypeId,
        fieldName,
        cfFieldValue
      )
    }
  )
  return convertedFields
}
