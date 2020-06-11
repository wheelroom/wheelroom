/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getTopicOptions } from '../../wheelroom/lib/get-topic-options'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { MultiParser } from '../../wheelroom/parsers/multi-parser'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { pageSectionCardPreset } from '../../wheelroom/wheels/section/page/presets/page-section-card-preset'
import { PageSectionProps } from './page-section'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { Topic } from '../../wheelroom/wheels/model/topic/topic'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { TopicProps } from '../topic/topic'
import { Wheel } from '../../wheelroom/wheels/types'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionCardPreset,
    getSectionStyle('card').base,
  ])

  const wheelShadow: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelShadow.style = deepMerge([
    { topic: topicPreset },
    pageSectionCardPreset,
    getSectionStyle('card').base,
    getSectionStyle('card').shadow,
  ])

  if (!props.topics) {
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
            fullTopicAsLink={true}
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
