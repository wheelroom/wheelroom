/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React, { Fragment, useContext } from 'react'
import { NavigationProps } from './navigation'
import { List } from '../../core/elements/list'
import { GLink } from '../../core/elements/g-link'
import { Box, Container, Flex } from '../../core/elements/grid'
import { buttonSecondaryStyle } from '../../styles/button'
import { ALink } from '../../core/elements/a-link'

import { getThemeSwitcherStore } from '@jacco-meijer/admin-theme-switcher'
import { AdminCoreContext } from '@jacco-meijer/admin-core'

import { Button } from '../../core/elements/button'
import { NavAction } from './nav-action'
import { NavigationSegmentProps } from '../navigation-segment'
import { NavLinks } from './nav-links'

const wrapperStyle = {
  label: 'Wrapper',
  position: 'fixed',
  bg: 'bg',
  width: '100%',
  zIndex: 1000,
  top: 0,
  height: '70px',
  borderBottom: '1px solid',
  borderColor: 'border',
}

const containerStyle = {
  label: 'Container',
  height: '100%',
  justifyContent: 'space-between',
}

const skipToContent = {
  label: 'Skip',
  display: 'block',
  w: 1,
  height: '70px',
  ':focus': {
    position: 'relative',
    display: 'flex',
    color: 'black',
    fontFamily: 'text',
    fontWeight: 5,
    backgroundColor: 'amber',
    textAlign: 'center',
    lineHeight: '70px',
    justifyContent: 'center',
    zIndex: 1002,
  },
}

const logoStyle = {
  label: 'Logo',
  alignItems: 'center',
}

const logoLinkStyle = {
  fontFamily: 'display',
  textDecoration: 'none',
  fontSize: [4, 5],
  fontWeight: 5,
  color: 'text',
  mr: 5,
  sup: {
    color: 'metal',
    fontWeight: 3,
  },
}

const navStyle = {
  label: 'Nav',
  display: 'flex',
  flex: '1',
  alignItems: 'center',
}

const listStyle = {
  label: 'NavItems',
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'wrap',
  mb: 0,
  mt: 0,
  pl: 0,
}

export const NavigationSingleVar = (props: NavigationProps) => {
  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId

  const navSegment = props.segments[0] as NavigationSegmentProps

  const toggleTheme = () => {
    setActiveTheme(activeThemeId === 'light' ? 'dark' : 'light')
  }
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
              <NavAction {...props.action} />
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
        </Container>
      </Box>
    </Fragment>
  )
}
