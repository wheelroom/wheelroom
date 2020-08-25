/**
 * Component interface only
 *
 * Component type: doc
 *
 */

export interface DocModel {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  slug: string
  text: {
    json: string
  }
  parent: {
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

export interface DocNode {
  node: DocModel
}

export interface AllDocModel {
  edges: DocNode[]
}
