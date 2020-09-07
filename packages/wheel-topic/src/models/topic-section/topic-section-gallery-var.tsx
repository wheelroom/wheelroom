/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Gallery
 *
 */

import React from 'react'
import { getTopicOptions } from '../../lib/get-topic-options'
import { Topic } from '../topic/topic'
import { TopicModel } from '../topic/model'
import { getSectionWheel, MultiParser } from '@wheelroom/core'
import { TopicSectionModel } from './model'
import { TopicSectionWrapper } from './topic-section-wrapper'

export const TopicSectionGalleryVar = (props: TopicSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'gallery',
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
          useAbstractParser={MultiParser}
          wheel={{ ...wheel, style: wheel.style.topic }}
        />
      ))}
    </TopicSectionWrapper>
  )
}
