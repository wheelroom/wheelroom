/**
 * Component interface only
 *
 * Component type: globals
 *
 */

export interface GlobalsProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  siteAuthor: string
  siteDescription: string
  siteHeading: string
  siteKeywords: string[]
}
