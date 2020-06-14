/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Headline
 *
 */

import React from 'react'
import { deepMerge } from '../../lib/deep-merge'
import { getTopicOptions } from '../../lib/get-topic-options'
import { getWheel, getSectionStyle } from '../../../themes/themes'
import { MultiParser } from '../../parsers/multi-parser'
import { ScrollSpy } from '../../lib/scroll-spy'
import { ThemeId } from '../../../admin-resources/theme-info'
import { Topic } from '../topic/topic'
import { topicPreset } from '../topic/presets/topic-preset'
import { TopicProps } from '../topic/model-types'
import { Wheel } from '../../types/wheel'
import { PageSectionProps } from './model-types'
import { PageSection } from './page-section-wheel'

export const PageSectionHeadlineVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    getSectionStyle('pageSection').headline,
  ])

  if (!props.topics) {
    return null
  }
  const topicHeading = props.index <= 1 ? 'h1' : 'h2'
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <PageSection containerStyle="container" wheel={wheel}>
        {props.topics.slice(0, 1).map((topic: TopicProps, index: number) => (
          <Topic
            key={index}
            topic={topic}
            useAbstractParser={MultiParser}
            useHeadingElement={topicHeading}
            wheel={{ ...wheel, style: wheel.style.topic }}
            topicOptions={getTopicOptions(props.topicOptions || [])}
          />
        ))}
      </PageSection>
    </ScrollSpy>
  )
}
