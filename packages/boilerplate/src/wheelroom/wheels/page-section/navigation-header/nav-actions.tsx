import React from 'react'
import { Flex } from '../../elements/grid'
import { ActionProps } from '../../../../models/action'
import { Button } from '../../elements/button'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Action } from '../../action/action'
import { NavActionsPreset } from './presets/nav-actions-preset'
import { Wheel } from '../../types'

interface NavActionsWheel extends Wheel {
  style: NavActionsPreset
}

export const NavActions = (props: {
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
    <Flex is="div" ncss={props.wheel.style.container.ncss} wheel={props.wheel}>
      {props.pageSectionInfo.hasAction && (
        <Action
          wheel={{ ...props.wheel, style: props.wheel.style.action }}
          {...props.action}
        />
      )}
      <Button
        type="button"
        title={`Current theme is ` + props.activeThemeId}
        ariaLabel={`Current theme is ` + props.activeThemeId}
        ncss={props.wheel.style.themeButton.ncss}
        value=""
        onClick={() => props.toggleTheme()}
        wheel={props.wheel}
      >
        {props.activeThemeId}
      </Button>
    </Flex>
  )
}