import React, { Fragment, useContext, useRef, useState } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { ALink } from '../../element/a-link'
import { Box, Container, Flex, Fluid, Wrapper } from '../../element/grid'
import { Button } from '../../element/button'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { NavHeaderList } from './nav-header-list'
import { Branding } from './branding'
import { NavHeaderActions } from './nav-header-actions'
import { Modal } from './modal'
import { Wheel } from '../../types'
import { NavHeaderWheelStyle } from './presets/nav-header-preset'
import { NavigationSectionProps } from '../../../../models/navigation-section/navigation-section'

interface PageSectionNavigationHeaderWheel extends Wheel {
  style: NavHeaderWheelStyle
}

export const PageSectionNavigationHeader = (props: {
  containerStyle: 'container' | 'fluid'
  hideThemeSwitchButton?: boolean
  pageSection: NavigationSectionProps
  useLogoElement?: JSX.Element
  wheel: PageSectionNavigationHeaderWheel
}) => {
  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId
  const [menuVisible, setMenuVisible] = useState(false)
  const buttonRef = useRef(null)

  const globals = props.pageSection.globals
  const navigation = props.pageSection.navigation || []
  if (!Array.isArray(navigation) || navigation.length < 1) {
    return null
  }
  const segments = navigation[0].segments
  if (!Array.isArray(segments) || segments.length < 0) {
    return null
  }

  const navSegment = segments[0]

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

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid

  return (
    <Fragment>
      <ALink
        href="#content"
        wheel={{ ...props.wheel, style: props.wheel.style.skipToContent }}
      >
        {navigation.skipToContentHeading}
      </ALink>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <Branding
            brandAction={navigation.brandAction}
            logo={props.useLogoElement || globals.siteHeading}
            wheel={{ ...props.wheel, style: props.wheel.style.branding }}
          />
          <Flex
            is={'nav'}
            wheel={{ ...props.wheel, style: props.wheel.style.navHeader }}
          >
            <NavHeaderList
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navHeader.list,
              }}
              actions={navSegment.actions}
            />
            <NavHeaderActions
              action={action}
              activeThemeId={activeThemeId}
              hideThemeSwitchButton={props.hideThemeSwitchButton}
              pageSectionInfo={pageSectionInfo}
              toggleTheme={toggleTheme}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navHeader.actions,
              }}
            />
          </Flex>
          <Box
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.modal }}
          >
            <Button
              id="modal-dialog"
              ariaExpanded={menuVisible}
              ariaPressed={menuVisible}
              ariaControls="header-navigation"
              ariaLabel="Open navigation"
              value=""
              role="button"
              ref={buttonRef}
              onClick={() => openMenu()}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.modal.button,
              }}
            >
              Menu
            </Button>
            <Modal
              action={action}
              activeThemeId={activeThemeId}
              closeMenu={closeMenu}
              hideThemeSwitchButton={props.hideThemeSwitchButton}
              menuVisible={menuVisible}
              actions={navSegment.actions}
              pageSectionInfo={pageSectionInfo}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.modal.dialog,
              }}
              toggleTheme={toggleTheme}
            />
          </Box>
        </ContainerType>
      </Wrapper>
    </Fragment>
  )
}
