/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { MultiParser } from '../../wheelroom/parsers/multi-parser'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { PageSectionProps } from './page-section'
import { pageSectionShowcasePreset } from '../../wheelroom/wheels/section/page/presets/page-section-showcase-preset'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { Topic } from '../../wheelroom/wheels/model/topic/topic'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { TopicProps } from '../topic/topic'
import { Wheel } from '../../wheelroom/wheels/types'

export const PageSectionShowcaseVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionShowcasePreset,
    getSectionStyle('showcase').base,
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
            key={index}
            topic={topic}
            useAbstractParser={MultiParser}
            useHeadingElement={'h3'}
            wheel={{ ...wheel, style: wheel.style.topic }}
            topicOptions={props.topicOptions || {}}
          />
        ))}
      </PageSection>
    </ScrollSpy>
  )
}
