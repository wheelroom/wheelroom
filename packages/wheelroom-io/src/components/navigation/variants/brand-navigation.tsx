import React from 'react'
import { Flex, NcssNode, Wheel } from '@wheelroom/core'
import {
  BrandNavigationSegment,
  BrandNavigationSegmentNcssTree,
} from '../../navigation-segment/brand-navigation-segment'
import { getNavSegments } from '../get-nav-segments'
import { NavigationModel } from '../model'

export interface BrandNavigationNcssTree extends NcssNode {
  segment: BrandNavigationSegmentNcssTree
}

export interface BrandNavigationWheel extends Wheel {
  style: BrandNavigationNcssTree
}

export interface BrandNavigationProps {
  hideBranding?: boolean
  logoElement: JSX.Element | undefined
  navigation: NavigationModel[]
  siteHeading: string | undefined
  wheel: BrandNavigationWheel
}

export const BrandNavigation = (props: BrandNavigationProps) => {
  if (props.hideBranding) {
    return null
  }
  const brandSegments = getNavSegments(props.navigation, 'brand')

  return (
    <Flex is="div" wheel={props.wheel}>
      <BrandNavigationSegment
        logoElement={props.logoElement}
        navigationSegment={brandSegments}
        siteHeading={props.siteHeading}
        wheel={{ ...props.wheel, style: props.wheel.style.segment }}
      />
    </Flex>
  )
}
