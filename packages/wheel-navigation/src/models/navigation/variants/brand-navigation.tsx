import React from 'react'
import { Wheel } from '@wheelroom/core'
import {
  BrandNavigationSegment,
  BrandNavigationSegmentNcssTree,
} from '../../navigation-segment/brand-navigation-segment'
import { getNavSegments } from '../get-nav-segments'
import { NavigationModel } from '../model'

export interface BrandNavigationWheel extends Wheel {
  style: BrandNavigationSegmentNcssTree
}

export interface BrandNavigationProps {
  wheel: BrandNavigationWheel
  navigation: NavigationModel[]
  logoElement: JSX.Element | undefined
  siteHeading: string | undefined
}

export const BrandNavigation = (props: BrandNavigationProps) => {
  const brandSegments = getNavSegments(props.navigation, 'brand')

  return (
    <BrandNavigationSegment
      logoElement={props.logoElement}
      navigationSegment={brandSegments}
      siteHeading={props.siteHeading}
      wheel={props.wheel}
    />
  )
}
