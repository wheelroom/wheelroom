/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getTopicOptions } from '../../wheelroom/lib/get-topic-options'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { MultiParser } from '../../wheelroom/parsers/multi-parser'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { pageSectionFeaturedPreset } from '../../wheelroom/wheels/section/page/presets/page-section-featured-preset'
import { PageSectionProps } from './page-section'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { Topic } from '../../wheelroom/wheels/model/topic/topic'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { TopicProps } from '../topic/topic'
import { Wheel } from '../../wheelroom/wheels/types'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionFeaturedPreset,
    getSectionStyle('featured').base,
  ])

  const wheelReverse: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelReverse.style = deepMerge([
    { topic: topicPreset },
    pageSectionFeaturedPreset,
    getSectionStyle('featured').base,
    getSectionStyle('featured').reversed,
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
