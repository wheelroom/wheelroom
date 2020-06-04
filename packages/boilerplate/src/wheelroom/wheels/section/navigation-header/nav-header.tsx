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

interface NavigationHeaderWheel extends Wheel {
  style: NavHeaderWheelStyle
}

export interface NavigationHeaderWheelProps {
  containerStyle: 'container' | 'fluid'
  hideThemeSwitchButton?: boolean
  navigation: NavigationProps[]
  useLogoElement?: JSX.Element
  wheel: NavigationHeaderWheel
}

export const NavigationHeader = (props: NavigationHeaderWheelProps) => {
  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId
  const [menuVisible, setMenuVisible] = useState(false)
  const buttonRef = useRef(null)

  console.log('navigation: ', props.navigation)
  console.log('segments: ', props.navigation[0].segments)

  const navigation = props.navigation || []
  if (
    !props.navigation ||
    !Array.isArray(navigation) ||
    navigation.length < 1
  ) {
    return null
  }

  const menuNavigation = navigation.find((navigation: NavigationProps) => {
    if (navigation.variation === 'menu') {
      const menuSegment = navigation.segments
      console.log('menuSegment:', menuSegment)
    }
  })

  // const navigation now is the first navigation from the array
  // what we must do here is:
  // loop through full array and find the variations we need
  // const brandNav = navigation.find(nav => nav.variation === 'brand')

  // For each nav like brandNav get the segments

  // Or get the first segment, see code below this line
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
        {/* {navigation.skipToContentHeading} */}
      </ALink>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          {/* <Branding
            brandAction={navigation.brandAction}
            logo={props.useLogoElement || globals.siteHeading}
            wheel={{ ...props.wheel, style: props.wheel.style.branding }}
          /> */}
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
            {/* <NavHeaderActions
              action={menuNavigation}
              activeThemeId={activeThemeId}
              hideThemeSwitchButton={props.hideThemeSwitchButton}
              toggleTheme={toggleTheme}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.navHeader.actions,
              }}
            /> */}
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
            {/* <Modal
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
            /> */}
          </Box>
        </ContainerType>
      </Wrapper>
    </Fragment>
  )
}
