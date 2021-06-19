import React from 'react'
import { Flex, NcssNode, Wheel } from '@wheelroom/core'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { NavigationModel } from '../model'
import { getNavSegments } from '../get-nav-segments'
import { ThemeButton } from '../../navigation-section/header/theme-button'

export interface ActionsNavigationNcssTree extends NcssNode {
  segment: NavigationSegmentNcssTree
  themeButton: NcssNode
}

export interface ActionsNavigationWheel extends Wheel {
  style: ActionsNavigationNcssTree
}

export interface ActionsNavigationProps {
  buttonName: string | undefined
  hideActions?: boolean
  hideThemeButton?: boolean
  maxSegments: number
  navigation: NavigationModel[]
  toggleTheme: () => void
  wheel: ActionsNavigationWheel
}

export const ActionsNavigation = (props: ActionsNavigationProps) => {
  if (props.hideActions) {
    return null
  }
  const segments = getNavSegments(props.navigation, 'actions')

  return (
    <Flex is="div" wheel={props.wheel}>
      <NavigationSegment
        headingElementName="h3"
        hideActionHeading={false}
        hideActionIcon={true}
        hideSegmentAbstract={true}
        hideSegmentHeading={true}
        maxSegments={props.maxSegments}
        navigationSegment={segments}
        wheel={{ ...props.wheel, style: props.wheel.style.segment }}
      />
      <ThemeButton
        buttonName={props.buttonName}
        hideThemeButton={props.hideThemeButton}
        toggleTheme={props.toggleTheme}
        wheel={{ ...props.wheel, style: props.wheel.style.themeButton }}
      />
    </Flex>
  )
}
