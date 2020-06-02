/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Headline
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { pageSectionHeadlinePreset } from '../../wheelroom/wheels/section/page/presets/page-section-headline-preset'
import { PageSectionProps } from './page-section'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionHeadlineVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionHeadlinePreset,
    getSectionStyle('headline').base,
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
      <PageSection
        topicProps={{
          maxActions: 2,
          useHeadingElement: props.index <= 1 ? 'h1' : 'h2',
          wheel,
        }}
        maxTopics={1}
        containerStyle="container"
        topicOptions={props.topicOptions || {}}
        topics={props.topics}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
