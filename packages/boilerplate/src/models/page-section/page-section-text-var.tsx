/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Text
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionFreestyle } from '../../wheelroom/wheels/section/freestyle/page-section-freestyle'
import { pageSectionFreestylePreset } from '../../wheelroom/wheels/section/freestyle/page-section-freestyle-preset'
import { PageSectionProps } from './page-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionTextVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionFreestylePreset,
    getSectionStyle('text').base,
  ])

  if (pageSectionInfo.hasText) {
    return (
      <ScrollSpy
        eventId={props.eventId}
        siteEmbeds={props.globals.siteEmbeds}
        pageSectionProps={props}
      >
        <PageSectionFreestyle
          pageSection={props}
          containerStyle="container"
          wheel={wheel}
        />
      </ScrollSpy>
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}
