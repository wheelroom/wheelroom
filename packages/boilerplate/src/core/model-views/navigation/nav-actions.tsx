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
  styleTree: NavActionsStyleTree
  toggleTheme: () => void
}) => {
  if (!props.pageSectionInfo.hasAction) {
    return null
  }
  const styleTree = props.styleTree || {}
  return (
    <Flex is="div" ncss={styleTree.container}>
      {props.pageSectionInfo.hasAction && (
        <Action styleTree={styleTree.action} {...props.action} />
      )}
      <Button
        type="button"
        title={`Current theme is ` + props.activeThemeId}
        ariaLabel={`Current theme is ` + props.activeThemeId}
        ncss={styleTree.themeButton}
        value=""
        onClick={() => props.toggleTheme()}
      >
        {props.activeThemeId}
      </Button>
    </Flex>
  )
}
