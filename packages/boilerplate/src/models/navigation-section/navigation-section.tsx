/**
 * Component
 *
 * Component type: navigationSection
 *
 */

import React from 'react'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { SectionProps } from '../../wheelroom/sections/section-props'
import { NavigationSectionHeaderVar } from './navigation-section-header-var'
import { NavigationSectionFooterVar } from './navigation-section-footer-var'

const componentList = {
  ['header']: NavigationSectionHeaderVar,
  ['footer']: NavigationSectionFooterVar,
}

export interface NavigationSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  navigation: any
  eventId: string
}

export const NavigationSection = (props: NavigationSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
