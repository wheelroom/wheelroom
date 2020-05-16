/**
 * Component
 *
 * Component type: embed
 *
 */

export type EmbedType =
  | 'html'
  | 'script-src'
  | 'js-app'
  | 'js-page'
  | 'js-action'

export interface EmbedProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  code?: {
    code: string
  }
  type?: EmbedType
}
