/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { getWheel, getSectionStyle } from '../../../themes/themes'
import { Hr } from '../../elements/self'
import { Wheel } from '../../lib/get-wheel'
import { ScrollSpy } from '../../../src-core/lib/scroll-spy'
import { ThemeId } from '../../../admin-resources/theme-info'
import { PageSectionProps } from './model-types'

export const PageSectionDividerVar = (props: PageSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = getSectionStyle('pageSection').divider

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <Hr wheel={wheel} />
    </ScrollSpy>
  )
}
