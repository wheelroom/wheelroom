/**
 * Component
 *
 * Component type: text
 *
 */

export interface TextProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  text: {
    json: string
  }
}
