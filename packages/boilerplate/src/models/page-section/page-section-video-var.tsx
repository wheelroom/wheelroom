/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Video
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { PageSectionProps } from './page-section'
import { pageSectionVideoPreset } from '../../wheelroom/wheels/section/page/presets/page-section-video-preset'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { Topic } from '../../wheelroom/wheels/model/topic/topic'
import { TopicProps } from '../topic/topic'
import { MultiParser } from '../../wheelroom/parsers/multi-parser'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionVideoPreset,
    getSectionStyle('video').base,
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
        {props.topics.slice(0, 1).map((topic: TopicProps, index: number) => (
          <Topic
            key={index}
            topic={topic}
            useAbstractParser={MultiParser}
            wheel={{ ...wheel, style: wheel.style.topic }}
            topicOptions={props.topicOptions || {}}
          />
        ))}
      </PageSection>
    </ScrollSpy>
  )
}
