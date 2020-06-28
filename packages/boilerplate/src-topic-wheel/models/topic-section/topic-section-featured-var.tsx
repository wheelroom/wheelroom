/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Featured
 *
 */

import React from 'react'
import { getTopicOptions } from '../../lib/get-topic-options'
import { Topic } from '../topic/topic'
import { TopicModelProps } from '../topic/model-props'
import { getWheel, MultiParser } from '../../../src-core'
import { TopicSectionModelProps } from './model-props'
import { TopicSectionWrapper } from './topic-section-wrapper'

export const TopicSectionFeaturedVar = (props: TopicSectionModelProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'featured',
  })

  if (!wheel || !props.topics) {
    return null
  }

  const topicsPresent =
    props.topics &&
    props.topics.filter((topic: TopicModelProps) => topic).length > 1
  const topicHeading = props.index <= 1 && !topicsPresent ? 'h1' : 'h2'

  return (
    <TopicSectionWrapper containerStyle="container" wheel={wheel}>
      {props.topics.map((topic: TopicModelProps, index: number) => (
        <Topic
          key={index}
          topic={topic}
          useAbstractParser={MultiParser}
          useHeadingElement={topicHeading}
          wheel={{ ...wheel, style: wheel.style.topic }}
          topicOptions={getTopicOptions(props.topicOptions || [])}
        />
      ))}
    </TopicSectionWrapper>
  )
}
