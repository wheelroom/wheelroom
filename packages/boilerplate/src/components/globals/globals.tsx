/**
 * Component interface only
 *
 * Component type: globals
 *
 */

import { FluidImage } from '../../core/elements/types'

export interface GlobalsProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  siteAuthor: string
  siteDescription: string
  siteHeading: string
  siteKeywords: string[]
}
