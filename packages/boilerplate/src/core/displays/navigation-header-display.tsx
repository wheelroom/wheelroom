import React, { Fragment, useContext, useState, useRef } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { ALink } from '../elements/a-link'
import { Box, Container, Flex } from '../elements/grid'
import { Button } from '../elements/button'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { NavigationSegmentProps } from '../../components/navigation-segment'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { NcssProps } from '../elements/types'
import { NavListStyleTree, NavList } from '../views/navigation/nav-list'
import { NavLogoStyleTree } from '../views/navigation/nav-logo'
import {
  NavActionsStyleTree,
  NavActions,
} from '../views/navigation/nav-actions'
import { NavDialogStyleTree, NavDialog } from '../views/navigation/nav-dialog'

export interface NavigationHeaderDisplayStyleTree {
  skipToContent: NcssProps
  wrapper: NcssProps
  container: NcssProps
  navLogo: NavLogoStyleTree
  menu: {
    nav: NcssProps
    navList: NavListStyleTree
    navActions: NavActionsStyleTree
    modalDialog: {
      container: NcssProps
      openMenuButton: NcssProps
      navDialog: NavDialogStyleTree
    }
  }
}

export const NavigationHeaderDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: NavigationHeaderDisplayStyleTree
}) => {
  /** Theme switcher admin module */
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId
  const [menuVisible, setMenuVisible] = useState(false)
  const buttonRef = useRef(null)

  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasNavigation) {
    return null
  }
  const styleTree = props.styleTree || {}
  const navSegment = props.pageSection.navigation
    .segments[0] as NavigationSegmentProps

  const toggleTheme = () => {
    setActiveTheme(activeThemeId === 'light' ? 'dark' : 'light')
  }

  const openMenu = () => {
    setMenuVisible(true)
  }

  const closeMenu = () => {
    setMenuVisible(false)
    const element: HTMLElement = buttonRef.current!
    element.focus()
  }

  return (
    <Fragment>
      <ALink href="#content" ncss={styleTree.skipToContent}>
        Skip to Wheelroom Content
      </ALink>
      <Box is="div" ncss={styleTree.wrapper}>
        <Container ncss={styleTree.container}>
          <Flex is={'nav'} ncss={styleTree.menu.nav}>
            <NavList
              styleTree={styleTree.menu.navList}
              pages={navSegment.pages}
            />
            <NavActions
              action={props.pageSection.actions[0]}
              activeThemeId={activeThemeId}
              pageSectionInfo={pageSectionInfo}
              styleTree={styleTree.menu.navActions}
              toggleTheme={toggleTheme}
            />
          </Flex>
          <Flex is="div" ncss={styleTree.menu.modalDialog.container}>
            <Button
              id="modal-dialog"
              ariaExpanded={menuVisible}
              ariaPressed={menuVisible}
              ariaControls="header-navigation"
              ariaLabel="Open header navigation"
              value=""
              role="button"
              ncss={styleTree.menu.modalDialog.openMenuButton}
              ref={buttonRef}
              onClick={() => openMenu()}
            >
              Menu
            </Button>
            <NavDialog
              action={props.pageSection.actions[0]}
              activeThemeId={activeThemeId}
              closeMenu={closeMenu}
              menuVisible={menuVisible}
              pages={navSegment.pages}
              pageSectionInfo={pageSectionInfo}
              styleTree={styleTree.menu.modalDialog.navDialog}
              toggleTheme={toggleTheme}
            />
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}
