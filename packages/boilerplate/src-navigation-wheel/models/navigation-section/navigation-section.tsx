/**
 * Component
 *
 * Component type: navigationSection
 *
 */

import React from 'react'
import { getVariation } from '../../../src-core'
import { NavigationSectionFooterVar } from './navigation-section-footer-var'
import { NavigationSectionHeaderVar } from './navigation-section-header-var'
import { NavigationSectionProps } from './model-types'

const componentList = {
  ['header']: NavigationSectionHeaderVar,
  ['footer']: NavigationSectionFooterVar,
}

export const NavigationSection = (props: NavigationSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
