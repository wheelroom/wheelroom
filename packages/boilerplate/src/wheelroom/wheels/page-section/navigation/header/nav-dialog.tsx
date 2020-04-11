import React from 'react'
import { NavList } from '../common/nav-list'
import { Box, Flex } from '../../../elements/grid'
import { Button } from '../../../elements/button'
import { ActionProps } from '../../../../../models/action'
import { IconMap } from '../../../../../svg/feather/iconMap'
import { PageSectionInfo } from '../../../../lib/get-page-section-info'
import { PageProps } from '../../../../../models/page/page'
import { Action } from '../../../action/action'
import { NavDialogTreeStyle } from './nav-dialog-style'

export const NavDialog = (props: {
  action: ActionProps
  activeThemeId?: string
  closeMenu: () => void
  menuVisible: boolean
  pages: PageProps[]
  pageSectionInfo: PageSectionInfo
  treeStyle: NavDialogTreeStyle
  toggleTheme: () => void
}) => {
  const treeStyle = props.treeStyle || {}
  const XIcon = IconMap.x
  return (
    <Box
      is="div"
      role="dialog"
      tabIndex={-1}
      ncss={
        props.menuVisible
          ? props.treeStyle.container.menuVisible.yes
          : props.treeStyle.container.menuVisible.no
      }
      ariaHidden={props.menuVisible ? false : undefined}
      ariaModal={props.menuVisible ? true : undefined}
      hidden={true}
    >
      <Flex
        is="section"
        role="document"
        id="header-navigation"
        ncss={
          props.menuVisible
            ? props.treeStyle.document.menuVisible.yes
            : props.treeStyle.document.menuVisible.no
        }
        ariaLabel="Header navigation"
      >
        <Button
          ariaLabel="Close header navigation"
          value=""
          role="button"
          onClick={() => props.closeMenu()}
          ncss={props.treeStyle.closeMenuButton}
        >
          <Box ariaHidden={true}>
            <XIcon />
          </Box>
        </Button>
        <NavList treeStyle={treeStyle.navList} pages={props.pages} />
        <Flex is="div" ncss={props.treeStyle.actions.container}>
          {props.pageSectionInfo.hasAction && (
            <Action
              treeStyle={props.treeStyle.actions.action}
              {...props.action}
            />
          )}
          <Button
            type="button"
            title={`Current theme is ` + props.activeThemeId}
            ariaLabel={`Current theme is ` + props.activeThemeId}
            ncss={props.treeStyle.actions.themeButton}
            value=""
            onClick={() => props.toggleTheme()}
          >
            {props.activeThemeId}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
