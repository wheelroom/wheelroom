import React from 'react'
import { Container, Fluid, Wrapper } from '../../elements/grid'
import { Wheel } from '../../lib/get-wheel'
import { PageSectionWheelStyle } from './topic-section-style'

export interface PageSectionWheel extends Wheel {
  style: PageSectionWheelStyle
}

export interface PageSectionWheelProps {
  /** Styling wheel */
  wheel: PageSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Page section children */
  children: any
}

export const PageSection = (props: PageSectionWheelProps) => {
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
