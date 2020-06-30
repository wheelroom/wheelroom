/**
 * Component interface only
 *
 * Component type: globals
 *
 */

import { EmbedModel } from '../embed/model'
import { MediaGatsbyModel } from '../media-breakpoint/media-gatsby-model'

export interface GlobalsModel {
  /** Gatsby fetched data */
  __typename: string
  siteAuthor?: string
  siteDescription?: string
  siteHeading?: string
  siteKeywords?: string[]
  siteImage?: MediaGatsbyModel
  siteEmbeds?: EmbedModel[]
  skipToContentHeading?: string
}
