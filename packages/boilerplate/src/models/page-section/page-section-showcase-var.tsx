/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionProps } from './page-section'
import { pageSectionShowcasePreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-showcase-preset'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionShowcaseVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    { topic: topicPreset },
    pageSectionShowcasePreset,
    getSectionStyle('showcase').base,
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
            fullTopicAsLink: false,
            pageSectionInfo,
            useHeadingElement: 'h3',
            wheel,
          }}
          containerStyle="container"
          pageSection={props}
          wheel={wheel}
        />
      </ScrollSpy>
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}
