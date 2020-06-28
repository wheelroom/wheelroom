/**
 * Component interface only
 *
 * Component type: globals
 *
 */

import { EmbedModel } from '../embed/model'
import { MediaObject } from '../../elements/types/media'

export interface GlobalsModel {
  /** Gatsby fetched data */
  __typename: string
  siteAuthor?: string
  siteDescription?: string
  siteHeading?: string
  siteKeywords?: string[]
  siteImage?: MediaObject
  siteEmbeds?: EmbedModel[]
  skipToContentHeading?: string
}
