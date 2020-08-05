import React from 'react'
import { Wheel, Container, Fluid, Wrapper } from '@wheelroom/core'
import { CustomSectionNcssTree } from './ncss-tree'

export interface CustomSectionWheel extends Wheel {
  style: CustomSectionNcssTree
}

export const CustomSectionWrapper = (props: {
  /** Styling wheel */
  wheel: CustomSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Custom section children */
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
