/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
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

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    getSectionStyle('pageSection').featured,
  ])

  const wheelReverse: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelReverse.style = deepMerge([
    { topic: topicPreset },
    getSectionStyle('pageSection').featured,
    getSectionStyle('pageSection').featuredReversed,
  ])

  if (!props.topics) {
    return null
  }

  const topicsPresent =
    props.topics && props.topics.filter((topic: TopicProps) => topic).length > 1
  const topicHeading = props.index <= 1 && !topicsPresent ? 'h1' : 'h2'

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <PageSection containerStyle="container" wheel={wheel}>
        {props.topics.slice(0, 2).map((topic: TopicProps, index: number) => (
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
