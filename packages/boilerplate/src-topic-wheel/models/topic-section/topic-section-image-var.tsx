/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Image
 *
 */

import React from 'react'
import { getTopicOptions } from '../../lib/get-topic-options'
import { Topic } from '../topic/topic'
import { TopicProps } from '../topic/model-types'
import { getWheel, MultiParser, ScrollSpy } from '../../../src-core'
import { TopicSectionProps } from './model-types'
import { TopicSectionWrapper } from './topic-section-wrapper'

export const TopicSectionImageVar = (props: TopicSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'block',
  })

  if (!wheel || !props.topics) {
    return null
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <TopicSectionWrapper containerStyle="container" wheel={wheel}>
        {props.topics.slice(0, 2).map((topic: TopicProps, index: number) => (
          <Topic
            key={index}
            topic={topic}
            useAbstractParser={MultiParser}
            wheel={{ ...wheel, style: wheel.style.topic }}
            topicOptions={getTopicOptions(props.topicOptions || [])}
          />
        ))}
      </TopicSectionWrapper>
    </ScrollSpy>
  )
}
