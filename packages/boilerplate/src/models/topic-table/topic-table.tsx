/**
 * Component
 *
 * Component type: topicTable
 *
 */

import React from 'react'
import { ActionProps } from '../action/action'
import { EmbedProps } from '../embed'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { MediaBreakpointProps } from '../media-breakpoint/media-breakpoint'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'
import { TopicRowProps } from '../topic-row'
import { TopicTableSingleVar } from './topic-table-single-var'

const componentList = {
  ['single']: TopicTableSingleVar,
}

export interface TopicTableProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  icon: string | JSX.Element
  actions: ActionProps[]
  rows: TopicRowProps[]
}

export const TopicTable = (props: TopicTableProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
