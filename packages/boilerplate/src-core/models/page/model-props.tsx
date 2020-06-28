/**
 * Component interface only
 *
 * Component type: page
 *
 */

import { MediaObject } from '../../elements/types/media'

export interface PageModelProps {
  /** Gatsby fetched data */
  __typename: string
  path: string
  sections: any
  theme?: string
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  seoImage?: MediaObject
}
