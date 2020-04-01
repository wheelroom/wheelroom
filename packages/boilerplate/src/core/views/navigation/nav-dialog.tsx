import React from 'react'
import { NcssProps } from '../../elements/types'
import { NavListStyleTree, NavList } from './nav-list'
import { Box, Flex } from '../../elements/grid'
import { Button } from '../../elements/button'
import { Action, ActionProps } from '../../../components/action'
import { IconMap } from '../../../svg/feather/iconMap'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { PageProps } from '../../../components/page/page'

export interface NavDialogStyleTree {
  container: {
    menuVisible: {
      yes: NcssProps
      no: NcssProps
    }
  }
  document: {
    menuVisible: {
      yes: NcssProps
      no: NcssProps
    }
  }
  closeMenuButton: NcssProps
  navList: NavListStyleTree
  actions: {
    container: NcssProps
    action: NcssProps
    themeButton: NcssProps
  }
}

export const NavDialog = (props: {
  action: ActionProps
  activeThemeId?: string
  closeMenu: () => void
  menuVisible: boolean
  pages: PageProps[]
  pageSectionInfo: PageSectionInfo
  styleTree: NavDialogStyleTree
  toggleTheme: () => void
}) => {
  const styleTree = props.styleTree || {}
  const XIcon = IconMap.x
  return (
    <Box
      is="div"
      role="dialog"
      tabIndex={-1}
      ncss={
        props.menuVisible
          ? props.styleTree.container.menuVisible.yes
          : props.styleTree.container.menuVisible.no
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
            ? props.styleTree.document.menuVisible.yes
            : props.styleTree.document.menuVisible.no
        }
        ariaLabel="Header navigation"
      >
        <Button
          ariaLabel="Close header navigation"
          value=""
          role="button"
          onClick={() => props.closeMenu()}
          ncss={props.styleTree.closeMenuButton}
        >
          <Box ariaHidden={true}>
            <XIcon />
          </Box>
        </Button>
        <NavList styleTree={styleTree.navList} pages={props.pages} />
        <Flex is="div" ncss={props.styleTree.actions.container}>
          {props.pageSectionInfo.hasAction && (
            <Action
              styleTree={props.styleTree.actions.action}
              {...props.action}
            />
          )}
          <Button
            type="button"
            title={`Current theme is ` + props.activeThemeId}
            ariaLabel={`Current theme is ` + props.activeThemeId}
            ncss={props.styleTree.actions.themeButton}
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
