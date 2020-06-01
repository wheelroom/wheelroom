/**
 * Component
 *
 * Component type: table
 *
 */

import React from 'react'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { TableSingleVar } from './table-single-var'

const componentList = {
  ['single']: TableSingleVar,
}

export interface TableProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  icon: string
  actions: any
  tableRows: any
}

export const Table = (props: TableProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
