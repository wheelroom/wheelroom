import React, { Fragment, useContext, useRef, useState } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { BrandNavigationSegment } from '../../navigation-segment/brand-navigation-segment'
import { NavigationModel } from '../../navigation/model'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { NavigationSegmentModel } from '../../navigation-segment/model'
import {
  NavigationSegmentNcssTree,
  BrandNavigationSegmentNcssTree,
} from '../../navigation-segment/ncss-tree'
import {
  ALink,
  Box,
  Button,
  Container,
  Flex,
  Fluid,
  GlobalsModel,
  SectionWheelThemes,
  Wheel,
  Wrapper,
  NcssNode,
} from '@wheelroom/core'
import { Modal, ModalNcssTree } from './modal'
import { ThemeButton } from './theme-button'

export interface NavigationSectionHeaderNcssTree {
  skipToContent: NcssNode
  container: NcssNode
  header: {
    brand: {
      segment: BrandNavigationSegmentNcssTree
    } & NcssNode
    menu: {
      segment: NavigationSegmentNcssTree
    } & NcssNode
    actions: {
      segment: NavigationSegmentNcssTree
      themeButton: NcssNode
    } & NcssNode
    modal: {
      menuButton: NcssNode
      dialog: ModalNcssTree
    } & NcssNode
  } & NcssNode
  wrapper: NcssNode
}

interface NavigationHeaderWheel extends Wheel {
  style: NavigationSectionHeaderNcssTree
}

export interface NavigationHeaderProps {
  containerStyle: 'container' | 'fluid'
  defaultThemeId: string
  globals: GlobalsModel
  hideThemeButton?: boolean
  navigation: NavigationModel[]
  themes: SectionWheelThemes
  useLogoElement?: JSX.Element
  wheel: NavigationHeaderWheel
}

const getNavSegments = (navigation: NavigationModel[], variation: string) => {
  const nav = navigation.find(
    (nav: NavigationModel) => nav.variation === variation
  )
  if (!nav || !nav.segments || !Array.isArray(nav.segments)) {
    return [] as NavigationSegmentModel[]
  }
  return nav.segments
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

  const actionsSegments = getNavSegments(props.navigation, 'actions')
  const brandSegments = getNavSegments(props.navigation, 'brand')
  const menuSegments = getNavSegments(props.navigation, 'menu')

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
          <Flex
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.header.brand }}
          >
            <BrandNavigationSegment
              logoElement={props.useLogoElement}
              siteHeading={props.globals.siteHeading}
              navigationSegment={brandSegments}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.brand.segment,
              }}
            />
          </Flex>
          <Flex
            is={'nav'}
            wheel={{ ...props.wheel, style: props.wheel.style.header.menu }}
          >
            <NavigationSegment
              hideActionHeading={false}
              hideActionIcon={false}
              hideSegmentHeading={true}
              maxSegments={1}
              navigationSegment={menuSegments}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.menu.segment,
              }}
            />
          </Flex>
          <Flex
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.header.actions }}
          >
            <NavigationSegment
              hideActionHeading={false}
              hideActionIcon={true}
              hideSegmentHeading={true}
              maxSegments={1}
              navigationSegment={actionsSegments}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.actions.segment,
              }}
            />
            <ThemeButton
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.actions.themeButton,
              }}
              buttonName={props.themes[activeThemeId].themeName}
              hideThemeButton={props.hideThemeButton}
              toggleTheme={toggleTheme}
            />
          </Flex>
          <Box
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.header.modal }}
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
                style: props.wheel.style.header.modal.menuButton,
              }}
            >
              Menu
            </Button>
            <Modal
              menuSegments={menuSegments}
              actionsSegments={actionsSegments}
              buttonName={props.themes[activeThemeId].themeName}
              closeMenu={closeMenu}
              hideThemeButton={props.hideThemeButton}
              menuVisible={menuVisible}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.header.modal.dialog,
              }}
              toggleTheme={toggleTheme}
            />
          </Box>
        </ContainerType>
      </Wrapper>
    </Fragment>
  )
}
