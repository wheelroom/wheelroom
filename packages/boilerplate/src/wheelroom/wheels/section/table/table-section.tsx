import React from 'react'
import { Container, Fluid, Wrapper } from '../../element/grid'
import { Table } from '../../model/table/table'
import { TableProps } from '../../../../models/table/table'
import { TableSectionWheelStyle } from './presets/table-section-preset'
import { TopicOptions } from '../../../lib/get-topic-options'
import { Wheel } from '../../types'

export interface TableSectionWheel extends Wheel {
  style: TableSectionWheelStyle
}

export const TableSection = (props: {
  /** Styling wheel */
  wheel: TableSectionWheel
  /** The topic to render */
  tables: TableProps[]
  /** Topic options */
  topicOptions: TopicOptions
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
}) => {
  if (!props.tables) {
    return null
  }

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
      <ContainerType
        wheel={{ ...props.wheel, style: props.wheel.style.container }}
      >
        <Table
          tables={props.tables}
          topicOptions={props.topicOptions}
          wheel={{ ...props.wheel, style: props.wheel.style.section }}
        />
      </ContainerType>
    </Wrapper>
  )
}
