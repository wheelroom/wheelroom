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
import { TextSectionProps } from './model-types'
import { TextSectionWrapper } from './text-section-wrapper'

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
    <TextSectionWrapper containerStyle="fluid" wheel={wheel}>
      <Text
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.section }}
        text={props.text}
      />
    </TextSectionWrapper>
  )
}
