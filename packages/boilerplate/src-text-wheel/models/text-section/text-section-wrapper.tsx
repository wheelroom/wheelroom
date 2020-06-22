import React from 'react'
import {
  Wheel,
  Container,
  Fluid,
  Wrapper,
  GridElementStyle,
} from '../../../src-core'
import { TextWheelStyle } from '../text/text-wheel-style'

export interface TextSectionWheelStyle {
  container: GridElementStyle
  text: TextWheelStyle
  wrapper: GridElementStyle
}

export interface TextSectionWheel extends Wheel {
  style: TextSectionWheelStyle
}

export const TextSectionWrapper = (props: {
  /** Styling wheel */
  wheel: TextSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Text section children */
  children: any
}) => {
  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        {props.children}
      </ContainerType>
    </Wrapper>
  )
}
