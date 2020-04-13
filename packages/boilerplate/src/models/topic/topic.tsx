/**
 * Component
 *
 * Component type: topic
 *
 */

import { MediaObject } from '../../wheelroom/wheels/elements/types/media'

export interface TopicProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  media: MediaObject | undefined
  icon: string | JSX.Element
  actions: any
}
