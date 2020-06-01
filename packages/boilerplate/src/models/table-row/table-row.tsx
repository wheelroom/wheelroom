/**
 * Component
 *
 * Component type: tableRow
 *
 */

import React from 'react'
import { ActionProps } from '../action/action'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { TableRowBodyVar } from './table-row-body-var'
import { TableRowFooterVar } from './table-row-footer-var'
import { TableRowHeaderVar } from './table-row-header-var'
import { TopicProps } from '../topic/topic'

const componentList = {
  ['body']: TableRowBodyVar,
  ['footer']: TableRowFooterVar,
  ['header']: TableRowHeaderVar,
}

export interface TableRowProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  heading?: string
  abstract?: {
    abstract: string
  }
  icon?: string | JSX.Element
  actions?: ActionProps[]
  topics?: TopicProps[]
}

export const TableRow = (props: TableRowProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
