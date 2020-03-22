/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React, { Fragment, useContext, useState, useRef } from 'react'
import { Action, ActionProps } from '../action'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { ALink } from '../../core/elements/a-link'
import { Box, Container, Flex } from '../../core/elements/grid'
import { Button } from '../../core/elements/button'
import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from '../../core/styles/button'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { GLink } from '../../core/elements/g-link'
import { List } from '../../core/elements/list'
import { NavigationProps } from './navigation'
import { NavigationSegmentProps } from '../navigation-segment'
import { NavLinks } from './nav-links'
import {
  skipToContent,
  wrapperStyle,
  containerStyle,
  logoStyle,
  logoLinkStyle,
  navStyle,
  listStyle,
  listMobileStyle,
  menuStyle,
  modalStyle,
  modalOpenStyle,
  modalContentStyle,
  modalContentOpenStyle,
  navigationHeaderStyle,
} from './navigation-styles'
import { IconMap } from '../../svg/feather/iconMap'
import { SiteMetadata } from '../../page-template'
import { GlobalsProps } from '../globals'
const XIcon = IconMap.x

interface NavigationHeaderProps extends NavigationProps {
  /** Action is displayed as a button at the right side of the navigation */
  actions: ActionProps[]
  /** Site metadata defined in gatsby-config */
  siteMetadata: SiteMetadata
  /** Site globals from CMS */
  globals: GlobalsProps
}

export const NavigationHeader = (props: NavigationHeaderProps) => {
  /** Theme switcher admin module */
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId
  const [menuVisible, setMenuVisible] = useState(false)
  const buttonRef = useRef(null)
  const hasActions = Array.isArray(props.actions) && props.actions.length > 0

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

  const navSegment = props.segments[0] as NavigationSegmentProps

  return (
    <Fragment>
      <ALink href="#content" ncss={skipToContent}>
        Skip to Wheelroom Content
      </ALink>
      <Box is="div" ncss={wrapperStyle}>
        <Container ncss={containerStyle}>
          <Flex is="div" ncss={logoStyle}>
            <GLink
              ncss={logoLinkStyle}
              to="/"
              aria-label={props.globals.siteHeading + `, Back to homepage`}
            >
              {props.globals.siteHeading + ` `}
              <sup>
                <small>{props.siteMetadata.legal.version}</small>
              </sup>
            </GLink>
          </Flex>
          <Flex
            is={'nav'}
            ncss={{ ...navStyle, display: ['none', 'none', 'flex'] }}
          >
            <List is="ul" ncss={listStyle}>
              <NavLinks
                linkStyle={{ ...navigationHeaderStyle }}
                pages={navSegment.pages}
              />
            </List>
            <Flex is="div" ncss={{ label: 'nav-settings' }}>
              {hasActions && (
                <Action
                  ncss={{ ...buttonPrimaryStyle }}
                  {...props.actions[0]}
                />
              )}
              <Button
                type="button"
                title={`Current theme is ` + activeThemeId}
                ariaLabel={`Current theme is ` + activeThemeId}
                ncss={{
                  ...buttonSecondaryStyle,
                  ml: 2,
                  textTransform: 'capitalize',
                  minWidth: '70px',
                }}
                value=""
                onClick={() => toggleTheme()}
              >
                {activeThemeId}
              </Button>
            </Flex>
          </Flex>
          <Flex
            is="div"
            ncss={{
              label: 'modal-dialog',
              ...menuStyle,
            }}
          >
            <Button
              id="modal-dialog"
              ariaExpanded={menuVisible}
              ariaPressed={menuVisible}
              ariaControls="header-navigation"
              ariaLabel="Open header navigation"
              value=""
              role="button"
              ncss={{
                ...buttonPrimaryStyle,
              }}
              ref={buttonRef}
              onClick={() => openMenu()}
            >
              Menu
            </Button>
            <Box
              is="div"
              role="dialog"
              tabIndex={-1}
              ncss={{
                label: 'modal',
                ...(menuVisible ? modalOpenStyle : modalStyle),
              }}
              ariaHidden={menuVisible ? false : undefined}
              ariaModal={menuVisible ? true : undefined}
              hidden={true}
            >
              <Flex
                is="section"
                role="document"
                id="header-navigation"
                ncss={{
                  label: 'modal-content',
                  ...(menuVisible ? modalContentOpenStyle : modalContentStyle),
                }}
                ariaLabel="Header navigation"
              >
                <Button
                  ariaLabel="Close header navigation"
                  value=""
                  role="button"
                  onClick={() => closeMenu()}
                  ncss={{
                    ...buttonPrimaryStyle,
                    mt: 3,
                    mr: 3,
                    p: 1,
                    w: '36px',
                    h: '36px',
                  }}
                >
                  <Box ariaHidden={true}>
                    <XIcon />
                  </Box>
                </Button>
                <List is="ul" ncss={{ label: 'nav-list', ...listMobileStyle }}>
                  <NavLinks
                    linkStyle={{ ...navigationHeaderStyle }}
                    pages={navSegment.pages}
                  />
                </List>
                <Flex is="div" ncss={{ label: 'nav-settings', w: 1, p: 3 }}>
                  {hasActions && (
                    <Action
                      ncss={{ ...buttonPrimaryStyle, w: 1 }}
                      {...props.actions[0]}
                    />
                  )}
                  <Button
                    type="button"
                    title={`Current theme is ` + activeThemeId}
                    ariaLabel={`Current theme is ` + activeThemeId}
                    ncss={{
                      ...buttonSecondaryStyle,
                      ml: 2,
                      w: 1,
                      textTransform: 'capitalize',
                    }}
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
