/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Text
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { RichText } from './rich-text/rich-text'
import { TextSectionModel } from './model'
import { TextSectionWrapper } from './text-section-wrapper'

export const TextSectionTextVar = (props: TextSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'textSection',
    sectionWheels: props.sectionWheels,
    variation: 'text',
  })
  if (!sectionWheel || !props.text) {
    return null
  }
  const { wheel } = sectionWheel
  return (
    <TextSectionWrapper containerStyle="fluid" wheel={wheel}>
      <RichText
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.richText }}
        textJson={props.text.json}
      />
    </TextSectionWrapper>
  )
}
