/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React, { Fragment, useContext, useReducer } from 'react'
import { Action, ActionProps } from '../action/action'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import { ALink } from '../../core/elements/a-link'
import { Box, Container, Flex } from '../../core/elements/grid'
import { Button } from '../../core/elements/button'
import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from '../../core/styles/button'
import { getThemeSwitcherStore } from '@jacco-meijer/admin-theme-switcher'
import { IconMap } from '../../svg/feather/iconMap'
const Icon = IconMap.x
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
  menuStyle,
  mobileMenuStyle,
} from './navigation-styles'

interface NavigationHeaderProps extends NavigationProps {
  /** Action is displayed as a button at the right side of the navigation */
  action: ActionProps
}

export const NavigationHeader = (props: NavigationHeaderProps) => {
  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId

  const navSegment = props.segments[0] as NavigationSegmentProps

  const toggleTheme = () => {
    setActiveTheme(activeThemeId === 'light' ? 'dark' : 'light')
  }

  const initMenu = { visible: false }

  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'show':
        return { visible: true }
      case 'hide':
        return { visible: false }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initMenu)

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
              aria-label="Wheelroom, Back to homepage"
            >
              Wheelroom{' '}
              <sup>
                <small>1.0.0</small>
              </sup>
            </GLink>
          </Flex>
          <Flex is={'nav'} ncss={navStyle}>
            <List is="ul" ncss={listStyle}>
              <NavLinks pages={navSegment.pages} />
            </List>
            <Flex>
              <Action {...props.action} />
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
              ...menuStyle,
            }}
          >
            <Button
              ariaExpanded={state.visible === true}
              ariaPressed={state.visible === true}
              ariaControls="MobileNavigation"
              ariaLabel="Toggle Menu"
              value=""
              role="button"
              ncss={{
                ...buttonPrimaryStyle,
              }}
              onClick={() => dispatch({ type: 'show' })}
            >
              Menu
            </Button>
          </Flex>
        </Container>
      </Box>
      <Box
        is="nav"
        ncss={{
          label: 'MobileOnly',
          display: state.visible === true ? 'block' : 'none',
        }}
        hidden={true}
      >
        <Box
          is="section"
          id="MobileNavigation"
          ncss={{ label: 'Modal', ...mobileMenuStyle }}
          ariaLabel="Main menu"
        >
          <Button
            ariaLabel="Close menu"
            value=""
            role="button"
            onClick={() => dispatch({ type: 'hide' })}
            ncss={{ ...buttonSecondaryStyle }}
          >
            <Box ariaHidden={true}>
              <Icon />
            </Box>
          </Button>
          <List is="ul" ncss={{ label: 'NavList' }}>
            <NavLinks pages={navSegment.pages} />
          </List>
        </Box>
      </Box>
    </Fragment>
  )
}
