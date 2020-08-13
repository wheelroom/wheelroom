/**
 * Component
 *
 * Component type: navigationSection
 *
 */

import React from 'react'
import { getVariation } from '@wheelroom/core'
import { NavigationSectionFooterVar } from './navigation-section-footer-var'
import { NavigationSectionHeaderVar } from './navigation-section-header-var'
import { NavigationSectionModel } from './model'

const componentList = {
  header: NavigationSectionHeaderVar,
  footer: NavigationSectionFooterVar,
}

export const NavigationSection = (props: NavigationSectionModel) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
