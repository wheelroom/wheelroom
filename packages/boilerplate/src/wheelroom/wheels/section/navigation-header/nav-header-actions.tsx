import React from 'react'
import { Button } from '../../element/button'
import { Flex } from '../../element/grid'
import { NavHeaderActionsWheelStyle } from './presets/nav-header-actions-preset'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'
import { Wheel } from '../../types'
import { ActionList } from './action-list'

interface NavHeaderActionsWheel extends Wheel {
  style: NavHeaderActionsWheelStyle
}

export interface NavHeaderActionsProps {
  activeThemeId?: string
  hideThemeSwitchButton?: boolean
  navigationSegments: NavigationSegmentProps[]
  toggleTheme: () => void
  wheel: NavHeaderActionsWheel
}

export const NavHeaderActions = (props: NavHeaderActionsProps) => {
  return (
    <Flex is="div" wheel={props.wheel}>
      <ActionList
        actions={props.navigationSegments[0].actions || []}
        wheel={{ ...props.wheel, style: props.wheel.style }}
      />
      {!props.hideThemeSwitchButton && (
        <Button
          type="button"
          title={`Current theme is ` + props.activeThemeId}
          ariaLabel={`Current theme is ` + props.activeThemeId}
          value=""
          onClick={() => props.toggleTheme()}
          wheel={{ ...props.wheel, style: props.wheel.style.themeButton }}
        >
          {props.activeThemeId}
        </Button>
      )}
    </Flex>
  )
}
