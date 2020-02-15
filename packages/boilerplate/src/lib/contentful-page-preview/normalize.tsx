type ContentfulFields = any
type GatsbyFields = any

/**
 * Contentful data exists in two formats here:
 *
 * 1) Contentful -> gatsby-source-contentful -> gatsby/graphql -> props
 * 2) Contentful -> client.getEntry
 *
 * In order to merge the two formats, all data is normalized to format #1.
 *
 */

export const normalize = (
  contentTypeFields: any,
  contentTypeId: string,
  cfFields: ContentfulFields,
  gFields: GatsbyFields
): GatsbyFields => {
  console.log(contentTypeFields)
  // console.log(cfFields)
  Object.entries(gFields).forEach(([fieldName, gFieldValue]: [string, any]) => {
    if (fieldName in cfFields) {
      const type = contentTypeFields[contentTypeId][fieldName].type
      console.log('G', fieldName, type, gFieldValue)
      console.log('CF', fieldName, type, cfFields[fieldName])
      // Handle each type recursivly
    }
  })
  return gFields
}
