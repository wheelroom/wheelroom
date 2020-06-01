/**
 * Component interface only
 *
 * Component type: page
 *
 */

import { MediaObject } from '../../wheelroom/wheels/element/types/media'

export interface PageProps {
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
