/**
 * Component
 *
 * Component type: action
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { ActionSingleVar } from './action-single-var'
import { NcssProps } from '../../core/elements/types'

const componentList = {
  ['single']: ActionSingleVar,
}

export interface ActionProps {
  /** Gatsby fetched data */
  __typename?: string
  title?: string
  heading?: string
  page?: any
  url?: string

  /** Local data */
  children?: any
  ncss?: NcssProps
  key?: any
}

export const Action = (props: ActionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
