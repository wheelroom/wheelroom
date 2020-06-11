/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Gallery
 *
 */

import React from 'react'
import { deepMerge } from '../../lib/deep-merge'
import { getSectionStyle, getWheel } from '../../../themes/themes'
import { getTopicOptions } from '../../lib/get-topic-options'
import { MultiParser } from '../../parsers/multi-parser'
import { PageSection } from './page-section-body'
import { pageSectionGalleryPreset } from './presets/page-section-gallery-preset'
import { PageSectionProps } from './model-types'
import { ScrollSpy } from '../../lib/scroll-spy'
import { ThemeId } from '../../../admin-resources/theme-info'
import { Topic } from '../../wheels/model/topic/topic'
import { topicPreset } from '../../wheels/model/topic/presets/topic-preset'
import { TopicProps } from '../topic/topic'
import { Wheel } from '../../types/wheel'

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
