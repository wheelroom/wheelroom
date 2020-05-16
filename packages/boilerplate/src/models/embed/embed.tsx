/**
 * Component
 *
 * Component type: embed
 *
 */

export interface EmbedProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  code: {
    code: string
  }
}
