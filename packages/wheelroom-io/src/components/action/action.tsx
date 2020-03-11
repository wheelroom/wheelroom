/**
 * Component
 *
 * Component type: action
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { ActionSingleVar } from './action-single-var'

const componentList = {
  ['single']: ActionSingleVar,
}

export interface ActionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  page: any
  url: string
}

export const Action = (props: ActionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
