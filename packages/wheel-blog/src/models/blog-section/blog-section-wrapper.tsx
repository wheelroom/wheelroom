import React from 'react'
import { Wheel, Container, Fluid, Wrapper } from '../../../src-core'
import { BlogSectionNcssTree } from './ncss-tree'

export interface BlogSectionWheel extends Wheel {
  style: BlogSectionNcssTree
}

export const BlogSectionWrapper = (props: {
  /** Styling wheel */
  wheel: BlogSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Blog section children */
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
