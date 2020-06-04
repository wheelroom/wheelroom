import React from 'react'
import { Flex } from '../../element/grid'
import { ActionProps } from '../../../../models/action'
import { Button } from '../../element/button'
import { Action } from '../../model/action/action'
import { NavHeaderActionsWheelStyle } from './presets/nav-header-actions-preset'
import { Wheel } from '../../types'

interface NavHeaderActionsWheel extends Wheel {
  style: NavHeaderActionsWheelStyle
}

export interface NavHeaderActionsProps {
  action: ActionProps
  activeThemeId?: string
  hideThemeSwitchButton?: boolean
  toggleTheme: () => void
  wheel: NavHeaderActionsWheel
}

export const NavHeaderActions = (props: NavHeaderActionsProps) => {
  return (
    <Flex is="div" wheel={props.wheel}>
      {props.action && (
        <Action
          {...props.action}
          wheel={{ ...props.wheel, style: props.wheel.style.link }}
        />
      )}
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
