/**
 * Component
 *
 * Component type: tableRow
 *
 */

import React from 'react'
import { ActionProps } from '../action/model-types'
import { getVariation } from '../../lib/get-variation'
import { TableRowBodyVar } from './table-row-body-var'
import { TableRowFooterVar } from './table-row-footer-var'
import { TableRowHeaderVar } from './table-row-header-var'
import { TopicProps } from '../topic/model-types'

const componentList = {
  ['header']: TableRowHeaderVar,
  ['body']: TableRowBodyVar,
  ['footer']: TableRowFooterVar,
}

export interface TableRowProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string
  actions?: ActionProps[]
  topics?: TopicProps[]
}

export const TableRow = (props: TableRowProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
