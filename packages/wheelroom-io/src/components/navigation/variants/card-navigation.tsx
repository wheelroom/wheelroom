import React from 'react'
import { Flex, NcssNode, Wheel } from '@wheelroom/core'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { getNavSegments } from '../get-nav-segments'
import { NavigationModel } from '../model'

export interface CardNavigationNcssTree extends NcssNode {
  segment: NavigationSegmentNcssTree
}

export interface CardNavigationWheel extends Wheel {
  style: CardNavigationNcssTree
}

export interface CardNavigationProps {
  wheel: CardNavigationWheel
  maxSegments: number
  navigation: NavigationModel[]
  hideCard?: boolean
}

export const CardNavigation = (props: CardNavigationProps) => {
  if (props.hideCard) {
    return null
  }

  const segments = getNavSegments(props.navigation, 'card')

  return (
    <Flex is={'nav'} wheel={props.wheel}>
      <NavigationSegment
        headingElementName="h4"
        hideActionHeading={false}
        hideActionIcon={false}
        hideSegmentAbstract={false}
        hideSegmentHeading={false}
        maxSegments={props.maxSegments}
        navigationSegment={segments}
        wheel={{ ...props.wheel, style: props.wheel.style.segment }}
      />
    </Flex>
  )
}
