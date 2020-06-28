/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Card
 *
 */

import React from 'react'
import { getTopicOptions } from '../../lib/get-topic-options'
import { Topic } from '../topic/topic'
import { TopicModel } from '../topic/model'
import { getWheel, MultiParser } from '@wheelroom/core'
import { TopicSectionModel } from './model'
import { TopicSectionWrapper } from './topic-section-wrapper'

export const TopicSectionCardVar = (props: TopicSectionModel) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'card',
  })

  if (!wheel || !props.topics) {
    return null
  }

  return (
    <TopicSectionWrapper containerStyle="container" wheel={wheel}>
      {props.topics.map((topic: TopicModel, index: number) => (
        <Topic
          fullTopicAsLink={true}
          key={index}
          topic={topic}
          useAbstractParser={MultiParser}
          wheel={{ ...wheel, style: wheel.style.topic }}
          topicOptions={getTopicOptions(props.topicOptions || [])}
        />
      ))}
    </TopicSectionWrapper>
  )
}
