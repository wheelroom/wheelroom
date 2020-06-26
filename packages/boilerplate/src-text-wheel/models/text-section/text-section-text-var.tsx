/**
 * Component variation
 *
 * Component type: textSection
 * Variation: Text
 *
 */

import React from 'react'
import { getWheel } from '../../../src-core'
import { Text } from '../text/text'
import { TextSectionModelProps } from './model-types'
import { TextSectionWrapper } from './text-section-wrapper'

export const TextSectionTextVar = (props: TextSectionModelProps) => {
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
      <Text
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.text }}
        text={props.text}
      />
    </TextSectionWrapper>
  )
}
