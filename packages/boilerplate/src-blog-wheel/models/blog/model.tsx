/**
 * Component interface only
 *
 * Component type: blog
 *
 */

import { MediaObject } from '../../../src-core'
import { TopicModelProps } from '../../../src-topic-wheel'

export interface BlogModel {
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
  authors?: TopicModelProps[]
  seoTitle?: string
  seoDescription?: string
  seoImage?: MediaObject
  seoKeywords?: string[]
}

export interface BlogNode {
  node: BlogModel
}

export interface AllBlogModel {
  edges: BlogNode[]
}
