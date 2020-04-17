import React from 'react'
import { Flex } from '../../elements/grid'
import { ActionProps } from '../../../../models/action'
import { Button } from '../../elements/button'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Action } from '../../action/action'
import { NavHeaderActionsPreset } from './presets/nav-header-actions-preset'
import { Wheel } from '../../types'

interface NavActionsWheel extends Wheel {
  style: NavHeaderActionsPreset
}

export const NavHeaderActions = (props: {
  action: ActionProps
  activeThemeId?: string
  pageSectionInfo: PageSectionInfo
  toggleTheme: () => void
  wheel: NavActionsWheel
}) => {
  if (!props.pageSectionInfo.hasAction) {
    return null
  }

  return (
    <Flex is="div" wheel={props.wheel}>
      {props.pageSectionInfo.hasAction && (
        <Action
          {...props.action}
          wheel={{ ...props.wheel, style: props.wheel.style.action }}
        />
      )}
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
    </Flex>
  )
}
