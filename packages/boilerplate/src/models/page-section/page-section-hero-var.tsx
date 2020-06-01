/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Hero
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { pageSectionHeroPreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-hero-preset'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionHeroVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionHeroPreset,
    getSectionStyle('hero').base,
  ])
  if (pageSectionInfo.hasTopic) {
    return (
      <ScrollSpy
        eventId={props.eventId}
        siteEmbeds={props.globals.siteEmbeds}
        pageSectionProps={props}
      >
        <PageSectionUnicorn
          topicProps={{
            maxActions: 2,
            pageSectionInfo,
            useHeadingElement: pageSectionInfo.index <= 1 ? 'h1' : 'h2',
            wheel,
          }}
          containerStyle="fluid"
          pageSection={props}
          maxTopics={1}
          wheel={wheel}
        />
      </ScrollSpy>
    )
  }
  return null
}
