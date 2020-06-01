/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Text
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { PageSectionFreestyle } from '../../wheelroom/wheels/section/freestyle/page-section-freestyle'
import { pageSectionFreestylePreset } from '../../wheelroom/wheels/section/freestyle/page-section-freestyle-preset'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { TextSectionProps } from './text-section'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'

export const TextSectionTextVar = (props: TextSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    pageSectionFreestylePreset,
    getSectionStyle('text').base,
  ])

  if (pageSectionInfo.hasText) {
    if (!props.text) {
      return null
    }
    return (
      <ScrollSpy
        eventId={props.eventId}
        siteEmbeds={props.globals.siteEmbeds}
        pageSectionProps={props}
      >
        <PageSectionFreestyle
          text={props.text}
          locale={props.locale}
          containerStyle="container"
          wheel={wheel}
        />
      </ScrollSpy>
    )
  }
  return null
}
