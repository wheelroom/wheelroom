import React from 'react'
import { Wheel, Container, Fluid, Wrapper } from '@wheelroom/core'
import { DocsSectionDocsNcssTree } from './ncss-tree'

export interface DocsSectionWheel extends Wheel {
  style: DocsSectionDocsNcssTree
}

export const DocSectionWrapper = (props: {
  /** Styling wheel */
  wheel: DocsSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Doc section children */
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
