/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Text
 *
 */

import React from 'react'
import { getWheel, ScrollSpy } from '../../../src-core'
import { TextSection } from './text/text-section'
import { TextSectionProps } from './model-types'

export const TextSectionTextVar = (props: TextSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'textSection',
    sectionWheels: props.sectionWheels,
    variation: 'text',
  })

  if (!wheel || !props.text) {
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
