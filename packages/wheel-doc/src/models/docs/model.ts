/**
 * Component interface only
 *
 * Component type: docs
 *
 */

export interface DocsModel {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  slug: string
  text: {
    json: string
  }
  parentDocs: {
    __typename: string
    heading?: string
    slug: string
    text: {
      json: string
    }
    sortOrder?: string
  }
  sortOrder?: string
}

export interface DocsNode {
  node: DocsModel
}

export interface AllDocsModel {
  edges: DocsNode[]
}
