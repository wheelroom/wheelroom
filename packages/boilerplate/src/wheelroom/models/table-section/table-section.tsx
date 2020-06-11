/**
 * Component
 *
 * Component type: tableSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../../page-template/section-props'
import { TableProps } from '../table/table'
import { TableSectionPriceVar } from './table-section-price-var'
import { TableSectionTableVar } from './table-section-table-var'
import { TopicOptions } from '../../lib/get-topic-options'

const componentList = {
  ['price']: TableSectionPriceVar,
  ['table']: TableSectionTableVar,
}

export interface TableSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  tables?: TableProps[]
  topicOptions?: TopicOptions
  variation?: string
}

export const TableSection = (props: TableSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
