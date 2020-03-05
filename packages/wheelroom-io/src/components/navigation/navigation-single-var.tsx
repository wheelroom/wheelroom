/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React, { Fragment, useContext } from 'react'
import { NavLinks } from './nav-links'
import { NavigationProps } from './navigation'
import { List } from '../../views/core-elements/list'
import { GLink } from '../../views/core-elements/g-link'
import { Box, Container, Flex } from '../../views/core-elements/grid'
import { buttonPrimaryStyle } from '../../styles/button'
import { ALink } from '../../views/core-elements/a-link'

import { getThemeSwitcherStore } from '@jacco-meijer/admin-theme-switcher'
import { AdminCoreContext } from '@jacco-meijer/admin-core'

const wrapperStyle = {
  label: 'Wrapper',
  position: 'fixed',
  bg: 'white',
  width: '100%',
  zIndex: 1000,
  top: 0,
  height: '70px',
  borderBottom: '1px solid',
  borderColor: 'silver',
}

const containerStyle = {
  label: 'Container',
  height: '100%',
  justifyContent: 'space-between',
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
  color: 'black',
  mr: 5,
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
  const handleThemeMode = themeSwitcherStore?.actions.setActiveTheme

  return (
    <Fragment>
      <ALink
        href="#content"
        ncss={{
          label: 'Spacer',
          display: 'block',
          w: 1,
          height: '70px',
          ':focus': {
            position: 'relative',
            zIndex: 1002,
          },
        }}
      >
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
              Wheelroom
            </GLink>
          </Flex>
          <Flex is={'nav'} ncss={navStyle}>
            <List is="ul" ncss={listStyle}>
              <NavLinks pages={props.pages} />
            </List>
            <Flex>
              <ALink
                href="https://github.com/wheelroom/wheelroom-io"
                ncss={{ ...buttonPrimaryStyle }}
              >
                Get started
              </ALink>
              <Box
                ncss={{ ...buttonPrimaryStyle, ml: 2 }}
                onClick={() => handleThemeMode('light')}
              >
                Set light theme
              </Box>
              <Box
                ncss={{ ...buttonPrimaryStyle, ml: 2 }}
                onClick={() => handleThemeMode('dark')}
              >
                Set dark theme
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}
