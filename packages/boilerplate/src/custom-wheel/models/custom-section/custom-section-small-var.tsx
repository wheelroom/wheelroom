/**
 * Component variation
 *
 * Component type: customSection
 * Variation: Small
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { CustomModel } from '../custom/model'
import { CustomSectionModel } from './model'
import { CustomSectionWrapper } from './custom-section-wrapper'
import { Small } from './small/small'

export const CustomSectionSmallVar = (props: CustomSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'customSection',
    sectionWheels: props.sectionWheels,
    variation: 'small',
  })
  if (!sectionWheel || !props.section) {
    return null
  }
  const { data, wheel } = sectionWheel
  return (
    <CustomSectionWrapper containerStyle="container" wheel={wheel}>
      {props.section.map((customModel: CustomModel, index: number) => (
        <Small
          data={data}
          key={index}
          model={customModel}
          wheel={{ ...wheel, style: wheel.style.section }}
        />
      ))}
    </CustomSectionWrapper>
  )
}
