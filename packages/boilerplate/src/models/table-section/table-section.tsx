/**
 * Component
 *
 * Component type: tableSection
 *
 */

import React from 'react'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { SectionProps } from '../../wheelroom/sections/section-props'
import { TableProps } from '../table/table'
import { TableSectionPriceVar } from './table-section-price-var'
import { TableSectionTableVar } from './table-section-table-var'
import { TopicOptionString } from '../../wheelroom/lib/get-topic-options'

const componentList = {
  ['table']: TableSectionTableVar,
  ['price']: TableSectionPriceVar,
}

export interface TableSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  tables?: TableProps[]
  topicOptions?: TopicOptionString[]
  variation?: string
}

export const TableSection = (props: TableSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
