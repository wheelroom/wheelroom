/**
 * Component interface only
 *
 * Component type: globals
 *
 */

import { EmbedProps } from '../embed/embed'

export interface GlobalsProps {
  /** Gatsby fetched data */
  __typename: string
  siteAuthor?: string
  siteDescription?: string
  siteHeading?: string
  siteKeywords?: string[]
  siteEmbeds?: EmbedProps[]
  skipToContentHeading?: string
}
