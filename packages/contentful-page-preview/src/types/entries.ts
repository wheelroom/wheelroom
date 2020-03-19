/** Field used by Gatsby. This field matches Gatbsy Graphql schema */
export type GatsbyField = any
/** Field fetched from Contentful */
export type ContentfulField = any
/** Full Contentful entry  */
export type ContentfulEntry = any
/** Fields used by Gatsby. These fields match Gatbsy Graphql schema */
export interface GatsbyFields {
  [fieldName: string]: GatsbyField
}
/** Full Contentmodel fetched from Contentful as a dict by contentType and fieldId  */
export interface ContentfulModel {
  [contentTypeName: string]: {
    [fieldId: string]: any
  }
}
