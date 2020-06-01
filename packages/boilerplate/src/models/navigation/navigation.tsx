/**
 * Component
 *
 * Component type: navigation
 *
 */

import React from 'react'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { NavigationActionsVar } from './navigation-actions-var'
import { NavigationBrandVar } from './navigation-brand-var'
import { NavigationLegalVar } from './navigation-legal-var'
import { NavigationListVar } from './navigation-list-var'
import { NavigationMenuVar } from './navigation-menu-var'
import { NavigationSegmentProps } from '../navigation-segment/navigation-segment'
import { NavigationSocialVar } from './navigation-social-var'

const componentList = {
  ['menu']: NavigationMenuVar,
  ['list']: NavigationListVar,
  ['actions']: NavigationActionsVar,
  ['social']: NavigationSocialVar,
  ['brand']: NavigationBrandVar,
  ['legal']: NavigationLegalVar,
}

export interface NavigationProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  segments?: NavigationSegmentProps[]
}

export const Navigation = (props: NavigationProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
