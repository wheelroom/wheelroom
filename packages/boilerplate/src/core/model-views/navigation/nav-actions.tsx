import React from 'react'
import { NcssProps } from '../../elements/types'
import { Flex } from '../../elements/grid'
import { Action, ActionProps } from '../../../models/action'
import { Button } from '../../elements/button'
import { PageSectionInfo } from '../../lib/get-page-section-info'

export interface NavActionsStyleTree {
  container: NcssProps
  action: NcssProps
  themeButton: NcssProps
}

export const NavActions = (props: {
  action: ActionProps
  activeThemeId?: string
  pageSectionInfo: PageSectionInfo
  treeStyle: NavActionsStyleTree
  toggleTheme: () => void
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
