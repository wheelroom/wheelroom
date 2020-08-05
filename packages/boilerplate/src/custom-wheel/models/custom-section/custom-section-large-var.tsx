/**
 * Component variation
 *
 * Component type: customSection
 * Variation: Large
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { CustomModel } from '../custom/model'
import { CustomSectionModel } from './model'
import { CustomSectionWrapper } from './custom-section-wrapper'
import { Large } from './large/large'

export const CustomSectionLargeVar = (props: CustomSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'customSection',
    sectionWheels: props.sectionWheels,
    variation: 'large',
  })
  if (!sectionWheel || !props.section) {
    return null
  }
  const { data, wheel } = sectionWheel
  return (
    <CustomSectionWrapper containerStyle="container" wheel={wheel}>
      {props.section.map((customModel: CustomModel, index: number) => (
        <Large
          data={data}
          key={index}
          model={customModel}
          wheel={{ ...wheel, style: wheel.style.section }}
        />
      ))}
    </CustomSectionWrapper>
  )
}
