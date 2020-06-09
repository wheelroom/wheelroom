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
import { NavigationProps } from '../../../../models/navigation/navigation'
import { NavigationSegmentProps } from '../../../../models/navigation-segment/navigation-segment'
import { GlobalsProps } from '../../../../models/globals/globals'

interface NavigationHeaderWheel extends Wheel {
  style: NavHeaderWheelStyle
}

export interface NavigationHeaderWheelProps {
  containerStyle: 'container' | 'fluid'
  globals: GlobalsProps
  hideThemeSwitchButton?: boolean
  navigation: NavigationProps[]
  useLogoElement?: JSX.Element
  wheel: NavigationHeaderWheel
}

const getNavSegments = (navigation: NavigationProps[], variation: string) => {
  const nav = navigation.find(
    (nav: NavigationProps) => nav.variation === variation
  )
  if (!nav || !nav.segments || !Array.isArray(nav.segments)) {
    return [] as NavigationSegmentProps[]
  }
  return nav.segments
}

export const NavigationHeader = (props: NavigationHeaderWheelProps) => {
  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId
  const [menuVisible, setMenuVisible] = useState(false)
  const buttonRef = useRef(null)

  if (!Array.isArray(props.navigation) || props.navigation.length < 1) {
    return null
  }

  const actionsNavSegments = getNavSegments(props.navigation, 'actions')
  const brandNavSegments = getNavSegments(props.navigation, 'brand')
  const menuNavSegments = getNavSegments(props.navigation, 'menu')

  // console.log('actionsSegments', actionsNavSegments)
  // console.log('brandSegments', brandNavSegments)
  // console.log('menuSegments', menuNavSegments)

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
        {props.globals.skipToContentHeading}
      </ALink>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <Branding
            logoElement={props.useLogoElement}
            siteHeading={props.globals.siteHeading}
            navigationSegments={brandNavSegments}
            wheel={{ ...props.wheel, style: props.wheel.style.branding }}
          />
          <Flex
            is={'nav'}
            wheel={{ ...props.wheel, style: props.wheel.style.navHeader }}
          >
            <NavHeaderList
              navigationSegments={menuNavSegments}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navHeader.list,
              }}
            />
            <NavHeaderActions
              activeThemeId={activeThemeId}
              hideThemeSwitchButton={props.hideThemeSwitchButton}
              navigationSegments={actionsNavSegments}
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
              menuNavSegments={menuNavSegments}
              actionsNavSegments={actionsNavSegments}
              activeThemeId={activeThemeId}
              closeMenu={closeMenu}
              hideThemeSwitchButton={props.hideThemeSwitchButton}
              menuVisible={menuVisible}
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
