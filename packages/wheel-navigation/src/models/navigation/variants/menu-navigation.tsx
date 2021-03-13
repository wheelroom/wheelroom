import React from 'react'
import { Flex, NcssNode, Wheel } from '@wheelroom/core'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { getNavSegments } from '../get-nav-segments'
import { NavigationModel } from '../model'

export interface MenuNavigationNcssTree extends NcssNode {
  segment: NavigationSegmentNcssTree
}

export interface MenuNavigationWheel extends Wheel {
  style: MenuNavigationNcssTree
}

export interface MenuNavigationProps {
  wheel: MenuNavigationWheel
  maxSegments: number
  navigation: NavigationModel[]
  hideMenu?: boolean
}

export const MenuNavigation = (props: MenuNavigationProps) => {
  if (props.hideMenu) {
    return null
  }
  const menuSegments = getNavSegments(props.navigation, 'menu')

  return (
    <Flex is={'nav'} wheel={props.wheel}>
      <NavigationSegment
        headingElementName="h3"
        hideActionHeading={false}
        hideActionIcon={false}
        hideSegmentAbstract={true}
        hideSegmentHeading={false}
        maxSegments={props.maxSegments}
        navigationSegment={menuSegments}
        wheel={{ ...props.wheel, style: props.wheel.style.segment }}
      />
    </Flex>
  )
}
