/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { Hr } from '../../wheelroom/wheels/element/self'
import { PageSectionProps } from '.'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'

export const PageSectionDividerVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = getSectionStyle('divider').base

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      pageSectionProps={props}
    >
      <Hr wheel={wheel} />
    </ScrollSpy>
  )
}
