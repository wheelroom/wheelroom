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
  const treeStyle = props.treeStyle || {}
  return (
    <Flex is="div" ncss={treeStyle.container}>
      {props.pageSectionInfo.hasAction && (
        <Action treeStyle={treeStyle.action} {...props.action} />
      )}
      <Button
        type="button"
        title={`Current theme is ` + props.activeThemeId}
        ariaLabel={`Current theme is ` + props.activeThemeId}
        ncss={treeStyle.themeButton}
        value=""
        onClick={() => props.toggleTheme()}
      >
        {props.activeThemeId}
      </Button>
    </Flex>
  )
}
