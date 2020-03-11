/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { NavigationSingleVar } from './navigation-single-var'
import { ActionProps } from '../action'
import { PageProps } from '../page/page'

const componentList = {
  ['single']: NavigationSingleVar,
}

export interface NavigationProps {
  // __typename: string
  // title: string
  // heading: string
  action: ActionProps
  pages: PageProps[]
}

export const Navigation = (props: NavigationProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
