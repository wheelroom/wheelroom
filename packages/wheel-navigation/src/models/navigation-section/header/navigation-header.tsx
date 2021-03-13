import React, { Fragment, useContext, useRef, useState } from 'react'
import {
  ALink,
  Box,
  Button,
  Container,
  Flex,
  Fluid,
  GlobalsModel,
  NcssNode,
  SectionWheelThemes,
  Wheel,
  Wrapper,
} from '@wheelroom/core'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { BrandNavigationSegmentNcssTree } from '../../navigation-segment/brand-navigation-segment'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { Modal, ModalNcssTree } from './modal'
import { NavigationModel } from '../../navigation/model'
import { NavigationSectionHeaderData } from './data'
import { ThemeButton } from './theme-button'
import { ActionsNavigation } from '../../navigation/variants/actions-navigation'
import { NavigationSegmentNcssTree } from '../../..'
import { BrandNavigation } from '../../navigation/variants/brand-navigation'
import { MenuNavigation } from '../../navigation/variants/menu-navigation'
import { SocialNavigation } from '../../navigation/variants/social-navigation'

export interface NavigationSectionHeaderNcssTree {
  skipToContent: NcssNode
  container: NcssNode
  header: {
    actions: { segment: NavigationSegmentNcssTree; themeButton: NcssNode }
    brand: { segment: BrandNavigationSegmentNcssTree }
    menu: { segment: NavigationSegmentNcssTree }
    social: { segment: NavigationSegmentNcssTree }
    modal: {
      menuButton: NcssNode
      dialog: ModalNcssTree
    } & NcssNode
  } & NcssNode
  wrapper: NcssNode
}

interface NavigationSectionHeaderWheel extends Wheel {
  style: NavigationSectionHeaderNcssTree
}

export interface NavigationHeaderProps {
  containerStyle: 'container' | 'fluid'
  data: NavigationSectionHeaderData
  defaultThemeId: string
  globals: GlobalsModel
  navigation: NavigationModel[]
  themes: SectionWheelThemes
  wheel: NavigationSectionHeaderWheel
}

const getNextKey = (obj: any, key: string): string => {
  const keys = Object.keys(obj),
    i = keys.indexOf(key)
  if (i + 1 >= keys.length) {
    return keys[0]
  }
  return keys[i + 1]
}

export const NavigationHeader = (props: NavigationHeaderProps) => {
  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId =
    themeSwitcherStore?.state.activeThemeId || props.defaultThemeId
  const [menuVisible, setMenuVisible] = useState(false)
  const buttonRef = useRef(null)

  if (!Array.isArray(props.navigation) || props.navigation.length < 1) {
    return null
  }

  const toggleTheme = () => {
    setActiveTheme(getNextKey(props.themes, activeThemeId))
  }

  const openMenu = () => {
    setMenuVisible(true)
  }

  const closeMenu = () => {
    setMenuVisible(false)
    const element: HTMLElement = buttonRef.current!
    element.focus()
  }
  console.log('props.data', props.data)

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Fragment>
      {!props.data.hideSkipToContent && (
        <ALink
          href="#content"
          wheel={{ ...props.wheel, style: props.wheel.style.skipToContent }}
        >
          {props.globals.skipToContentHeading}
        </ALink>
      )}
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          {!props.data.hideBranding && (
            <Flex
              is="div"
              wheel={{ ...props.wheel, style: props.wheel.style.header.brand }}
            >
              <BrandNavigation
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.header.brand.segment,
                }}
                navigation={props.navigation}
                logoElement={props.data.useLogoElement}
                siteHeading={props.globals.siteHeading}
              />
            </Flex>
          )}
          {!props.data.hideMenu && (
            <Flex
              is={'nav'}
              wheel={{ ...props.wheel, style: props.wheel.style.header.menu }}
            >
              <MenuNavigation
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.header.menu.segment,
                }}
                maxSegments={10}
                navigation={props.navigation}
              />
            </Flex>
          )}
          {!props.data.hideSocial && (
            <Flex
              is={'div'}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.social,
              }}
            >
              <SocialNavigation
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.header.social.segment,
                }}
                maxSegments={1}
                navigation={props.navigation}
              />
            </Flex>
          )}
          {!props.data.hideActions && (
            <Flex
              is="div"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.actions,
              }}
            >
              <ActionsNavigation
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.header.actions.segment,
                }}
                maxSegments={1}
                navigation={props.navigation}
              />
              <ThemeButton
                buttonName={props.themes[activeThemeId].themeName}
                hideThemeButton={props.data.hideThemeButton}
                toggleTheme={toggleTheme}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.header.actions.themeButton,
                }}
              />
            </Flex>
          )}
          {!props.data.hideModal && (
            <Box
              is="div"
              wheel={{ ...props.wheel, style: props.wheel.style.header.modal }}
            >
              <Button
                ariaControls="header-navigation"
                ariaExpanded={menuVisible}
                ariaLabel="Open navigation"
                ariaPressed={menuVisible}
                id="modal-dialog"
                onClick={() => openMenu()}
                ref={buttonRef}
                role="button"
                value=""
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.header.modal.menuButton,
                }}
              >
                Menu
              </Button>
              <Modal
                buttonName={props.themes[activeThemeId].themeName}
                closeMenu={closeMenu}
                hideThemeButton={props.data.hideThemeButton}
                menuVisible={menuVisible}
                navigation={props.navigation}
                toggleTheme={toggleTheme}
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.header.modal.dialog,
                }}
              />
            </Box>
          )}
        </ContainerType>
      </Wrapper>
    </Fragment>
  )
}
