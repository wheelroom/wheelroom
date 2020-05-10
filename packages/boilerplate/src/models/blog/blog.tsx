/**
 * Component interface only
 *
 * Component type: blog
 *
 */

import { MediaObject } from '../../core/elements/types'

export interface BlogProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  slug: string
  navigationHeading: string
  date: string
  text: {
    json: string
  }
  profile: any
  seoTitle: string
  seoDescription: string
  seoImage: any
  seoKeywords: string[]
}
