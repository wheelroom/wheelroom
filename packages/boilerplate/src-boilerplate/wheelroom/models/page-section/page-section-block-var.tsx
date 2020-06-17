/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Block
 *
 */

import React from 'react'
import { getTopicOptions } from '../../lib/get-topic-options'
import { MultiParser } from '../../parsers/multi-parser'
import { ScrollSpy } from '../../lib/scroll-spy'
import { Topic } from '../topic/topic'
import { TopicProps } from '../topic/model-types'
import { getWheel } from '../../lib/get-wheel'
import { PageSectionProps } from './model-types'
import { PageSection } from './page-section-wheel'

export const PageSectionBlockVar = (props: PageSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'text',
    sectionWheels: props.sectionWheels,
    variation: 'text',
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
      <PageSection containerStyle="container" wheel={wheel}>
        {props.topics.map((topic: TopicProps, index: number) => (
          <Topic
            key={index}
            topic={topic}
            useAbstractParser={MultiParser}
            wheel={{ ...wheel, style: wheel.style.topic }}
            topicOptions={getTopicOptions(props.topicOptions || [])}
          />
        ))}
      </PageSection>
    </ScrollSpy>
  )
}
