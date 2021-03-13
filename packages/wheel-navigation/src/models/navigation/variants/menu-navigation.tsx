import React from 'react'
import { Wheel } from '@wheelroom/core'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { getNavSegments } from '../get-nav-segments'
import { NavigationModel } from '../model'

export interface MenuNavigationWheel extends Wheel {
  style: NavigationSegmentNcssTree
}

export interface MenuNavigationProps {
  wheel: MenuNavigationWheel
  maxSegments: number
  navigation: NavigationModel[]
}

export const MenuNavigation = (props: MenuNavigationProps) => {
  const menuSegments = getNavSegments(props.navigation, 'menu')

  return (
    <NavigationSegment
      headingElementName="h3"
      hideActionHeading={false}
      hideActionIcon={false}
      hideSegmentAbstract={true}
      hideSegmentHeading={false}
      maxSegments={props.maxSegments}
      navigationSegment={menuSegments}
      wheel={props.wheel}
    />
  )
}
