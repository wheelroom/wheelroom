import React, { Fragment, useContext, useState, useRef } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { ALink } from '../elements/a-link'
import { Box, Container, Flex } from '../elements/grid'
import { Button } from '../elements/button'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { NavigationSegmentProps } from '../../models/navigation-segment'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../models/page-section/page-section'
import { NcssProps } from '../elements/types'
import { NavListStyleTree, NavList } from '../model-views/navigation/nav-list'
import { NavLogo, NavLogoStyleTree } from '../model-views/navigation/nav-logo'
import {
  NavActionsStyleTree,
  NavActions,
} from '../model-views/navigation/nav-actions'
import {
  NavDialogStyleTree,
  NavDialog,
} from '../model-views/navigation/nav-dialog'
import { GlobalsProps } from '../../models/globals'
import { SiteMetadata } from '../../page-template'

export interface NavigationHeaderDisplayStyleTree {
  skipToContent: NcssProps
  wrapper: NcssProps
  container: NcssProps
  navLogo: NavLogoStyleTree
  menu: {
    nav: NcssProps
    navLogo: NavLogoStyleTree
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

  const action = props.pageSection.actions && props.pageSection.actions[0]

  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasNavigation) {
    return null
  }
  const globals = props.pageSection.globals
  const siteMetadata = props.pageSection.siteMetadata
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
        {`Skip to` + globals.siteHeading + `Content`}
      </ALink>
      <Box is="div" ncss={styleTree.wrapper}>
        <Container ncss={styleTree.container}>
          <NavLogo
            globals={globals}
            siteMetadata={siteMetadata}
            styleTree={styleTree.menu.navLogo}
          />
          <Flex is={'nav'} ncss={styleTree.menu.nav}>
            <NavList
              styleTree={styleTree.menu.navList}
              pages={navSegment.pages}
            />
            <NavActions
              action={action}
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
              action={action}
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
