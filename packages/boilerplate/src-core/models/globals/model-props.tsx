/**
 * Component interface only
 *
 * Component type: globals
 *
 */

import { EmbedModelProps } from '../embed/model-props'
import { MediaObject } from '../../elements/types/media'

export interface GlobalsModelProps {
  /** Gatsby fetched data */
  __typename: string
  siteAuthor?: string
  siteDescription?: string
  siteHeading?: string
  siteKeywords?: string[]
  siteImage?: MediaObject
  siteEmbeds?: EmbedModelProps[]
  skipToContentHeading?: string
}
