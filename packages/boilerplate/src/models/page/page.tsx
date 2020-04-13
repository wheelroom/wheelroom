/**
 * Component interface only
 *
 * Component type: page
 *
 */

import { MediaObject } from '../../wheelroom/wheels/elements/types/media'

export interface PageProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  path: string
  navigationHeading: string
  sections: any
  theme: string
  seoTitle: string
  seoDescription: string
  seoImage: MediaObject
}
