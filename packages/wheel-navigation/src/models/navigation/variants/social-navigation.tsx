import React from 'react'
import { Flex, NcssNode, Wheel } from '@wheelroom/core'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { getNavSegments } from '../get-nav-segments'
import { NavigationModel } from '../model'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'

export interface SocialNavigationNcssTree extends NcssNode {
  segment: NavigationSegmentNcssTree
}

export interface SocialNavigationWheel extends Wheel {
  style: SocialNavigationNcssTree
}

export interface SocialNavigationProps {
  wheel: SocialNavigationWheel
  maxSegments: number
  navigation: NavigationModel[]
  hideSocial?: boolean
}

export const SocialNavigation = (props: SocialNavigationProps) => {
  if (props.hideSocial) {
    return null
  }

  const socialSegments = getNavSegments(props.navigation, 'social')

  return (
    <Flex is={'div'} wheel={props.wheel}>
      <NavigationSegment
        headingElementName="h3"
        hideActionHeading={true}
        hideActionIcon={false}
        hideSegmentAbstract={true}
        hideSegmentHeading={true}
        maxSegments={props.maxSegments}
        navigationSegment={socialSegments}
        wheel={{
          ...props.wheel,
          style: props.wheel.style.segment,
        }}
      />
    </Flex>
  )
}
