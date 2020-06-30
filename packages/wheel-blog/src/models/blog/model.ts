/**
 * Component interface only
 *
 * Component type: blog
 *
 */

import { MediaGatsbyModel } from '@wheelroom/core'
import { TopicModel } from '@wheelroom/wheel-topic'

export interface BlogModel {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaGatsbyModel
  icon?: string
  slug: string
  date: string
  text: {
    json: string
  }
  categories?: string[]
  authors?: TopicModel[]
  seoTitle?: string
  seoDescription?: string
  seoImage?: MediaGatsbyModel
  seoKeywords?: string[]
}

export interface BlogNode {
  node: BlogModel
}

export interface AllBlogModel {
  edges: BlogNode[]
}
