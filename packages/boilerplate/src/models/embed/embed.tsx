/**
 * Component
 *
 * Component type: embed
 *
 */

export type EmbedType =
  | 'html'
  | 'js-action'
  | 'js-app'
  | 'js-page-section'
  | 'js-page'

export interface EmbedProps {
  /** Gatsby fetched data */
  __typename: string
  title?: string
  code?: {
    code: string
  }
  type?: EmbedType
}
