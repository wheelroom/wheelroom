/**
 * Component interface only
 *
 * Component type: blog
 *
 */

import { MediaObject } from '../../../src-core'

export interface BlogProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaObject
  icon?: string
  slug: string
  date: string
  text: {
    json: string
  }
  categories?: string[]
  authors?: TopicProps[]
  seoTitle?: string
  seoDescription?: string
  seoImage?: MediaObject
  seoKeywords?: string[]
}

export interface BlogNodeProps {
  node: BlogProps
}

export interface AllBlogProps {
  edges: BlogNodeProps[]
}
