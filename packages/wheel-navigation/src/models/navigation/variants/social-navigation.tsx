import React from 'react'
import { Wheel } from '@wheelroom/core'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { getNavSegments } from '../get-nav-segments'
import { NavigationModel } from '../model'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'

export interface SocialNavigationWheel extends Wheel {
  style: NavigationSegmentNcssTree
}

export interface SocialNavigationProps {
  wheel: SocialNavigationWheel
  maxSegments: number
  navigation: NavigationModel[]
}

export const SocialNavigation = (props: SocialNavigationProps) => {
  const socialSegments = getNavSegments(props.navigation, 'social')

  return (
    <NavigationSegment
      headingElementName="h3"
      hideActionHeading={true}
      hideActionIcon={false}
      hideSegmentAbstract={true}
      hideSegmentHeading={true}
      maxSegments={props.maxSegments}
      navigationSegment={socialSegments}
      wheel={props.wheel}
    />
  )
}
