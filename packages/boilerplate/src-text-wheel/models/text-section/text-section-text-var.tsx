/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Text
 *
 */

import React from 'react'
import { getWheel } from '../../../src-core'
import { RichText } from './rich-text/rich-text'
import { TextSectionModel } from './model-props'
import { TextSectionWrapper } from './text-section-wrapper'

export const TextSectionTextVar = (props: TextSectionModel) => {
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
    <TextSectionWrapper containerStyle="fluid" wheel={wheel}>
      <RichText
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.richText }}
        textJson={props.text.json}
      />
    </TextSectionWrapper>
  )
}
