import React from 'react'
import { Wheel } from '@wheelroom/core'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { NavigationModel } from '../model'
import { getNavSegments } from '../get-nav-segments'

export interface ActionsNavigationWheel extends Wheel {
  style: NavigationSegmentNcssTree
}

export interface ActionsNavigationProps {
  wheel: ActionsNavigationWheel
  maxSegments: number
  navigation: NavigationModel[]
}

export const ActionsNavigation = (props: ActionsNavigationProps) => {
  const menuSegments = getNavSegments(props.navigation, 'actions')

  return (
    <NavigationSegment
      headingElementName="h3"
      hideActionHeading={false}
      hideActionIcon={true}
      hideSegmentAbstract={true}
      hideSegmentHeading={true}
      maxSegments={props.maxSegments}
      navigationSegment={menuSegments}
      wheel={props.wheel}
    />
  )
}
