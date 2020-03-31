/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React, { Fragment, useContext, useState, useRef } from 'react'
import { Action } from '../../components/action'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { ALink } from '../elements/a-link'
import { Box, Container, Flex } from '../elements/grid'
import { Button } from '../elements/button'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { GLink } from '../elements/g-link'
import { List } from '../elements/list'
import { NavigationSegmentProps } from '../../components/navigation-segment'
import { NavLinks, NavLinksStyleTree } from '../views/navigation/nav-links'
import { IconMap } from '../../svg/feather/iconMap'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { NcssProps } from '../elements/types'
const XIcon = IconMap.x

export interface NavigationHeaderDisplayStyleTree {
  skipToContent: NcssProps
  wrapper: NcssProps
  container: NcssProps
  logo: {
    container: NcssProps
    link: NcssProps
  }
  menu: {
    nav: NcssProps
    pages: {
      list: NcssProps
      listItem: NavLinksStyleTree
    }
    actions: {
      container: NcssProps
      action: NcssProps
      themeButton: NcssProps
    }
    modalDialog: {
      container: NcssProps
      openMenuButton: NcssProps
      dialog: {
        container: NcssProps
        document: NcssProps
        closeMenuButton: NcssProps
        pages: {
          list: NcssProps
          listItem: NavLinksStyleTree
        }
        actions: {
          container: NcssProps
          action: NcssProps
          themeButton: NcssProps
        }
      }
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

  const globals = props.pageSection.globals
  const siteMetadata = props.pageSection.siteMetadata
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
          <Flex is="div" ncss={styleTree.logo.container}>
            <GLink
              ncss={styleTree.logo.link}
              to="/"
              aria-label={globals.siteHeading + `, Back to homepage`}
            >
              {globals.siteHeading + ` `}
              <sup>
                <small>{siteMetadata.legal.version}</small>
              </sup>
            </GLink>
          </Flex>
          <Flex is={'nav'} ncss={styleTree.menu.nav}>
            <List is="ul" ncss={styleTree.menu.pages.list}>
              <NavLinks
                styleTree={styleTree.menu.pages.listItem}
                pages={navSegment.pages}
              />
            </List>
            <Flex is="div" ncss={styleTree.menu.actions.container}>
              {pageSectionInfo.hasAction && (
                <Action
                  styleTree={styleTree.menu.actions.action}
                  {...props.pageSection.actions[0]}
                />
              )}
              <Button
                type="button"
                title={`Current theme is ` + activeThemeId}
                ariaLabel={`Current theme is ` + activeThemeId}
                ncss={styleTree.menu.actions.themeButton}
                value=""
                onClick={() => toggleTheme()}
              >
                {activeThemeId}
              </Button>
            </Flex>
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
            <Box
              is="div"
              role="dialog"
              tabIndex={-1}
              ncss={styleTree.menu.modalDialog.dialog.container}
              ariaHidden={menuVisible ? false : undefined}
              ariaModal={menuVisible ? true : undefined}
              hidden={true}
            >
              <Flex
                is="section"
                role="document"
                id="header-navigation"
                ncss={styleTree.menu.modalDialog.dialog.document}
                ariaLabel="Header navigation"
              >
                <Button
                  ariaLabel="Close header navigation"
                  value=""
                  role="button"
                  onClick={() => closeMenu()}
                  ncss={styleTree.menu.modalDialog.dialog.closeMenuButton}
                >
                  <Box ariaHidden={true}>
                    <XIcon />
                  </Box>
                </Button>
                <List
                  is="ul"
                  ncss={styleTree.menu.modalDialog.dialog.pages.list}
                >
                  <NavLinks
                    styleTree={styleTree.menu.modalDialog.dialog.pages.listItem}
                    pages={navSegment.pages}
                  />
                </List>
                <Flex
                  is="div"
                  ncss={styleTree.menu.modalDialog.dialog.actions.container}
                >
                  {pageSectionInfo.hasAction && (
                    <Action
                      styleTree={
                        styleTree.menu.modalDialog.dialog.actions.action
                      }
                      {...props.pageSection.actions[0]}
                    />
                  )}
                  <Button
                    type="button"
                    title={`Current theme is ` + activeThemeId}
                    ariaLabel={`Current theme is ` + activeThemeId}
                    ncss={styleTree.menu.modalDialog.dialog.actions.themeButton}
                    value=""
                    onClick={() => toggleTheme()}
                  >
                    {activeThemeId}
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}
