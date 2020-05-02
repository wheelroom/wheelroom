import React from 'react'
import { Flex } from '../../element/grid'
import { ActionProps } from '../../../../models/action'
import { Button } from '../../element/button'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Action } from '../../model/action/action'
import { NavHeaderActionsWheelStyle } from './presets/nav-header-actions-preset'
import { Wheel } from '../../types'

interface NavActionsWheel extends Wheel {
  style: NavHeaderActionsWheelStyle
}

export const NavHeaderActions = (props: {
  action: ActionProps
  activeThemeId?: string
  hideThemeSwitchButton?: boolean
  pageSectionInfo: PageSectionInfo
  toggleTheme: () => void
  wheel: NavActionsWheel
}) => {
  return (
    <Flex is="div" wheel={props.wheel}>
      {props.pageSectionInfo.hasAction && (
        <Action
          {...props.action}
          wheel={{ ...props.wheel, style: props.wheel.style.action }}
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
