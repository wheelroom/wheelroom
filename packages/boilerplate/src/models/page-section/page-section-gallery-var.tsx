/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Gallery
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getSectionStyle, getWheel } from '../../themes/themes'
import { getTopicOptions } from '../../wheelroom/lib/get-topic-options'
import { MultiParser } from '../../wheelroom/parsers/multi-parser'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { pageSectionGalleryPreset } from '../../wheelroom/wheels/section/page/presets/page-section-gallery-preset'
import { PageSectionProps } from './page-section'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { Topic } from '../../wheelroom/wheels/model/topic/topic'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { TopicProps } from '../topic/topic'
import { Wheel } from '../../wheelroom/wheels/types'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionGalleryPreset,
    getSectionStyle('gallery').base,
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
        {props.topics.slice(0, 4).map((topic: TopicProps, index: number) => (
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
