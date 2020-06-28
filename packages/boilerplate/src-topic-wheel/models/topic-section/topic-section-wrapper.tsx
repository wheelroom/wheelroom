import React from 'react'
import { Container, Fluid, Wheel, Wrapper } from '../../../src-core'
import { TopicSectionNcssTree } from './ncss-tree'

export interface TopicSectionWheel extends Wheel {
  style: TopicSectionNcssTree
}

export interface TopicSectionProps {
  /** Styling wheel */
  wheel: TopicSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Page section children */
  children: any
}

export const TopicSectionWrapper = (props: TopicSectionProps) => {
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
