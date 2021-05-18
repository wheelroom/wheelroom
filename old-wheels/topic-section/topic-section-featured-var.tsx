/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Featured
 *
 */

import React from 'react'
import { getTopicOptions, TopicOptions } from '../../lib/get-topic-options'
import { Topic } from '../topic/topic'
import { TopicModel } from '../topic/model'
import { getSectionWheel } from '@wheelroom/core'
import { TopicSectionModel } from './model'
import { TopicSectionWrapper } from './topic-section-wrapper'

export const TopicSectionFeaturedVar = (props: TopicSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.theme || props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'featured',
  })

  if (!sectionWheel || !props.topics) {
    return null
  }
  const { data, wheel } = sectionWheel

  const topicsPresent =
    props.topics.filter((topic: TopicModel) => topic).length > 1
  const topicHeading = props.index <= 1 && !topicsPresent ? 'h1' : 'h2'
  const topicOptions = getTopicOptions({
    optionStrings: props.topicOptions,
    locale: props.locale,
  })
  return (
    <TopicSectionWrapper containerStyle="container" wheel={wheel}>
      {props.topics.map((topic: TopicModel, index: number) => {
        const oddIndex = index % 2
        const oddEvenTopicOptions = {
          ...topicOptions,
          reverseOrder: topicOptions.reverseOrder ? !oddIndex : !!oddIndex,
        } as TopicOptions
        return (
          <Topic
            data={data}
            key={index}
            topic={topic}
            topicOptions={oddEvenTopicOptions}
            useHeadingElement={topicHeading}
            wheel={{ ...wheel, style: wheel.style.topic }}
          />
        )
      })}
    </TopicSectionWrapper>
  )
}
