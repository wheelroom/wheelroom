/**
 * Component
 *
 * Component type: tableSection
 *
 */

import React from 'react'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { SectionProps } from '../../wheelroom/sections/section-props'
import { TableSectionTableVar } from './table-section-table-var'
import { TableSectionPriceVar } from './table-section-price-var'

const componentList = {
  ['table']: TableSectionTableVar,
  ['price']: TableSectionPriceVar,
}

export interface TableSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  topicOptions: string[]
  tables: any
  eventId: string
}

export const TableSection = (props: TableSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
