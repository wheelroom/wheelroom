import React from 'react'
import {
  Container,
  Fluid,
  GridElementStyle,
  Wheel,
  Wrapper,
} from '../../../src-core'
import { TopicWheelStyle } from '../topic/topic'

export interface TopicSectionWheelStyle {
  container: GridElementStyle
  topic: TopicWheelStyle
  wrapper: GridElementStyle
}

export interface TopicSectionWheel extends Wheel {
  style: TopicSectionWheelStyle
}

export interface TopicSectionWheelProps {
  /** Styling wheel */
  wheel: TopicSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Page section children */
  children: any
}

export const TopicSectionWrapper = (props: TopicSectionWheelProps) => {
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
