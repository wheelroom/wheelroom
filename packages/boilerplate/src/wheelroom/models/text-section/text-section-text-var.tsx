/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Text
 *
 */

import React from 'react'
import { deepMerge } from '../../lib/deep-merge'
import { getWheel, getSectionStyle } from '../../../themes/themes'
import { ScrollSpy } from '../../lib/scroll-spy'
import { TextSection } from './text/text-section'
import { textSectionPreset } from './text/text-section-preset'
import { TextSectionProps } from './model-types'
import { ThemeId } from '../../../admin-resources/theme-info'
import { Wheel } from '../../types/wheel'

export const TextSectionTextVar = (props: TextSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([textSectionPreset, getSectionStyle('text').base])

  if (!props.text) {
    return null
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <TextSection
        containerStyle="fluid"
        locale={props.locale}
        text={props.text}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
