/**
 * Component interface only
 *
 * Component type: doc
 *
 */

import { MediaObject } from '../../wheelroom/wheels/element/types/media'

export interface DocProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaObject
  icon?: string | JSX.Element
  slug: string
  text: {
    json: string
  }
  parent?: DocProps
  sortOrder?: string
}
