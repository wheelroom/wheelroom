import React, { Fragment, useContext, useState, useRef } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { ALink } from '../../elements/a-link'
import { Box, Container, Flex } from '../../elements/grid'
import { Button } from '../../elements/button'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { NavigationSegmentProps } from '../../../../models/navigation-segment'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { NavList } from './nav-list'
import { NavLogo } from './nav-logo'
import { NavActions } from './nav-actions'
import { NavDialog } from './nav-dialog'
import { Wheel } from '../../types'
import { NavHeaderPreset } from './presets/nav-header-preset'

interface PageSectionNavigationHeaderWheel extends Wheel {
  style: NavHeaderPreset
}

export const PageSectionNavigationHeader = (props: {
  pageSection: PageSectionProps
  useLogoElement?: JSX.Element
  wheel: PageSectionNavigationHeaderWheel
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
      <ALink
        href="#content"
        ncss={props.wheel.style.skipToContent}
        wheel={props.wheel}
      >
        {`Skip to ${globals.siteHeading} Content`}
      </ALink>
      <Box is="div" ncss={props.wheel.style.wrapper.ncss} wheel={props.wheel}>
        <Container ncss={props.wheel.style.container.ncss} wheel={props.wheel}>
          <NavLogo
            logo={props.useLogoElement || globals.siteHeading}
            version={siteMetadata.legal.version}
            wheel={{ ...props.wheel, style: props.wheel.style.menu.navLogo }}
          />
          <Flex
            is={'nav'}
            ncss={props.wheel.style.menu.nav.ncss}
            wheel={props.wheel}
          >
            <NavList
              wheel={{ ...props.wheel, style: props.wheel.style.menu.navList }}
              pages={navSegment.pages}
            />
            <NavActions
              action={action}
              activeThemeId={activeThemeId}
              pageSectionInfo={pageSectionInfo}
              toggleTheme={toggleTheme}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.menu.navActions,
              }}
            />
          </Flex>
          <Flex
            is="div"
            ncss={props.wheel.style.menu.modalDialog.container.ncss}
            wheel={props.wheel}
          >
            <Button
              id="modal-dialog"
              ariaExpanded={menuVisible}
              ariaPressed={menuVisible}
              ariaControls="header-navigation"
              ariaLabel="Open header navigation"
              value=""
              role="button"
              ncss={props.wheel.style.menu.modalDialog.openMenuButton.ncss}
              ref={buttonRef}
              onClick={() => openMenu()}
              wheel={props.wheel}
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
              wheel={{
                ...props.wheel,
                style: props.wheel.style.menu.modalDialog.navDialog,
              }}
              toggleTheme={toggleTheme}
            />
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}
