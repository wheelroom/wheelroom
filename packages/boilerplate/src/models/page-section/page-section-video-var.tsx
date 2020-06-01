/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Video
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { PageSectionProps } from './page-section'
import { PageSectionUnicorn } from '../../wheelroom/wheels/section/unicorn/page-section-unicorn'
import { pageSectionVideoPreset } from '../../wheelroom/wheels/section/unicorn/presets/page-section-video-preset'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { ThemeId } from '../../admin-resources/theme-info'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

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
      siteEmbeds={props.globals.siteEmbeds}
      sectionProps={props}
    >
      <PageSectionUnicorn
        topicProps={{
          topicOptions: pageSectionInfo.topicOptions,
          wheel,
        }}
        containerStyle="container"
        maxTopics={1}
        topics={props.topics}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
