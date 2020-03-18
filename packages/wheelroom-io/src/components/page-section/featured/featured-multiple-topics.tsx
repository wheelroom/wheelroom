import React from 'react'
import { TopicProps } from '../../topic'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { TextProps } from '../../text'

export interface FeaturedProps {
  info: PageSectionInfo
  locale: string
  text?: TextProps
  topic: TopicProps
}

/**
 *
 * Requires two or more topics
 *
 * - Two topics: the image of the first topic is displayed, the two topics ared
 *   shown next to the image
 * - Four topics: the image of the first topic is displayed, the four topics
 *   ared shown next to the image
 *
 */

export interface FeaturedMultipleTopicsProps {
  info: PageSectionInfo
  topics: TopicProps[]
}

export const FeaturedMultipleTopics = (props: FeaturedMultipleTopicsProps) => {
  return <div>FeaturedMultipleTopics: {props.topics[0].heading}</div>
}
