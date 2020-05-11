/**
 * Component interface only
 *
 * Component type: blog
 *
 */

import { TopicProps } from '../topic/topic'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'

export interface BlogProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  slug: string
  navigationHeading: string
  date: string
  text: {
    json: string
  }
  topics: TopicProps[]
  profiles: TopicProps[]
  seoTitle: string
  seoDescription: string
  seoImage: MediaObject
  seoKeywords: string[]
}
