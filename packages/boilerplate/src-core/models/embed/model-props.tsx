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

export interface EmbedModel {
  /** Gatsby fetched data */
  __typename: string
  code?: {
    code: string
  }
  type?: EmbedType
}
