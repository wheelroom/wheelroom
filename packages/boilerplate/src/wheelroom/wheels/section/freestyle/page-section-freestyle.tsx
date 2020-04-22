import React from 'react'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { Container, Fluid, Wrapper } from '../../element/grid'
import { Text } from '../../model/text/text'
import { Wheel } from '../../types'
import { FreestyleWheelStyle } from './page-section-freestyle-preset'

export interface FreestyleWheel extends Wheel {
  style: FreestyleWheelStyle
}

export const PageSectionFreestyle = (props: {
  /** Contains the topic to render */
  pageSection: PageSectionProps
  /** Styling wheel */
  wheel: FreestyleWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasText) {
    return null
  }
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Text
          {...props.pageSection.text}
          locale={props.pageSection.locale}
          wheel={{ ...props.wheel, style: props.wheel.style.text }}
          text={props.pageSection.text}
        />
      </ContainerType>
    </Wrapper>
  )
}
