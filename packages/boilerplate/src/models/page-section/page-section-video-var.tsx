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
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
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

  if (pageSectionInfo.hasTopic) {
    return (
      <ScrollSpy
        eventId={props.eventId}
        siteEmbeds={props.globals.siteEmbeds}
        pageSectionProps={props}
      >
        <PageSectionUnicorn
          topicProps={{
            pageSectionActions: props.actions,
            pageSectionInfo,
            wheel,
          }}
          containerStyle="container"
          maxTopics={1}
          pageSection={props}
          wheel={wheel}
        />
      </ScrollSpy>
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}
