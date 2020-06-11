/**
 * Component interface only
 *
 * Component type: globals
 *
 */

import { EmbedProps } from '../embed/embed'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'

export interface GlobalsProps {
  /** Gatsby fetched data */
  __typename: string
  siteAuthor?: string
  siteDescription?: string
  siteHeading?: string
  siteKeywords?: string[]
  siteImage?: MediaObject
  siteEmbeds?: EmbedProps[]
  skipToContentHeading?: string
}
