/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Block
 *
 */

import React from 'react'
import { getTopicOptions } from '../../lib/get-topic-options'
import { Topic } from '../topic/topic'
import { TopicModel } from '../topic/model'
import { getSectionWheel } from '@wheelroom/core'
import { TopicSectionModel } from './model'
import { TopicSectionWrapper } from './topic-section-wrapper'

export const TopicSectionBlockVar = (props: TopicSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.theme || props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'block',
  })

  if (!sectionWheel || !props.topics) {
    return null
  }
  const { data, wheel } = sectionWheel

  return (
    <TopicSectionWrapper containerStyle="container" wheel={wheel}>
      {props.topics.map((topic: TopicModel, index: number) => (
        <Topic
          data={data}
          key={index}
          topic={topic}
          topicOptions={getTopicOptions({
            optionStrings: props.topicOptions,
            locale: props.locale,
          })}
          wheel={{ ...wheel, style: wheel.style.topic }}
        />
      ))}
    </TopicSectionWrapper>
  )
}
