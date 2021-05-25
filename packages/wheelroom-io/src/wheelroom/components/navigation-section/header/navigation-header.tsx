import React, { Fragment, useContext, useRef, useState } from 'react'
import {
  ALink,
  Box,
  Button,
  Container,
  Fluid,
  GlobalsModel,
  NcssNode,
  SectionWheelThemes,
  Wheel,
  Wrapper,
} from '@wheelroom/core'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { Modal, ModalNcssTree } from './modal'
import { NavigationModel } from '../../navigation/model'
import { NavigationSectionHeaderData } from './data'
import {
  ActionsNavigation,
  ActionsNavigationNcssTree,
} from '../../navigation/variants/actions-navigation'
import {
  BrandNavigation,
  BrandNavigationNcssTree,
} from '../../navigation/variants/brand-navigation'
import {
  MenuNavigation,
  MenuNavigationNcssTree,
} from '../../navigation/variants/menu-navigation'
import {
  SocialNavigation,
  SocialNavigationNcssTree,
} from '../../navigation/variants/social-navigation'

export interface NavigationSectionHeaderNcssTree extends NcssNode {
  skipToContent: NcssNode
  container: NcssNode
  header: {
    actions: ActionsNavigationNcssTree
    brand: BrandNavigationNcssTree
    menu: MenuNavigationNcssTree
    social: SocialNavigationNcssTree
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
          <BrandNavigation
            hideBranding={props.data.hideBranding}
            logoElement={props.data.useLogoElement}
            navigation={props.navigation}
            siteHeading={props.globals.siteHeading}
            wheel={{
              ...props.wheel,
              style: props.wheel.style.header.brand,
            }}
          />
          <MenuNavigation
            wheel={{
              ...props.wheel,
              style: props.wheel.style.header.menu,
            }}
            maxSegments={10}
            navigation={props.navigation}
            hideMenu={props.data.hideMenu}
          />
          <SocialNavigation
            wheel={{
              ...props.wheel,
              style: props.wheel.style.header.social,
            }}
            maxSegments={1}
            navigation={props.navigation}
            hideSocial={props.data.hideSocial}
          />
          <ActionsNavigation
            wheel={{
              ...props.wheel,
              style: props.wheel.style.header.actions,
            }}
            maxSegments={1}
            navigation={props.navigation}
            buttonName={props.themes[activeThemeId].themeName}
            hideActions={props.data.hideActions}
            hideThemeButton={props.data.hideThemeButton}
            toggleTheme={toggleTheme}
          />
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
                hideActions={props.data.hideActions}
                hideThemeButton={props.data.hideThemeButton}
                hideMenu={props.data.hideMenu}
                hideSocial={props.data.hideSocial}
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
