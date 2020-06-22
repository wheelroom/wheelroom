import React from 'react'
import {
  Wheel,
  Container,
  Fluid,
  Wrapper,
  GridElementStyle,
} from '../../../src-core'
import { TableWheelStyle } from '../table/table'

export interface TableSectionWheelStyle {
  container: GridElementStyle
  section: TableWheelStyle
  wrapper: GridElementStyle
}

export interface TableSectionWheel extends Wheel {
  style: TableSectionWheelStyle
}

export const TableSectionWrapper = (props: {
  /** Styling wheel */
  wheel: TableSectionWheel
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Table section children */
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
