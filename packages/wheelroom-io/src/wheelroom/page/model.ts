/**
 * Component interface only
 *
 * Component type: page
 *
 */

import { MediaGatsbyModel } from '../media-breakpoint/media-gatsby-model'

export interface PageModel {
  /** Gatsby fetched data */
  __typename: string
  path: string
  sections: any
  theme?: string
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  seoImage?: MediaGatsbyModel
}
