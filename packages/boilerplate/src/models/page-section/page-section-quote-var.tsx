/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Quote
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { PageSection } from '../../wheelroom/wheels/section/page/page-section'
import { PageSectionProps } from './page-section'
import { pageSectionQuotePreset } from '../../wheelroom/wheels/section/page/presets/page-section-quote-preset'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'

export const PageSectionQuoteVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionQuotePreset,
    getSectionStyle('quote').base,
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
          useAbstractElement: 'blockquote',
          useHeadingElement: 'p',
          wheel,
        }}
        containerStyle="container"
        topicOptions={props.topicOptions || {}}
        topics={props.topics}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
