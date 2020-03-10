/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Page header
 *
 */

import React, { Fragment, useContext } from 'react'
import { NavigationLinks } from './navigation-links'
import { NavigationSectionProps } from './navigation-section'
import { List } from '../../views/core-elements/list'
import { GLink } from '../../views/core-elements/g-link'
import { Box, Container, Flex } from '../../views/core-elements/grid'
import { buttonPrimaryStyle, buttonSecondaryStyle } from '../../styles/button'
import { ALink } from '../../views/core-elements/a-link'

import { getThemeSwitcherStore } from '@jacco-meijer/admin-theme-switcher'
import { AdminCoreContext } from '@jacco-meijer/admin-core'

import { ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
import { Button } from '../../views/core-elements/button'

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

export const NavigationSectionPageHeaderVar = (
  props: NavigationSectionProps
) => {
  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setThemeMode = themeSwitcherStore?.actions.setActiveTheme
  // Get current Theme ID
  const currentThemeMode = useGetCurrentThemeId() as ThemeId

  const handleThemeMode = () => {
    if (currentThemeMode === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }

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
              Wheelroom{' '}
              <sup>
                <small>1.0.0</small>
              </sup>
            </GLink>
          </Flex>
          <Flex is={'nav'} ncss={navStyle}>
            <List is="ul" ncss={listStyle}>
              <NavigationLinks pages={props.navigation} />
            </List>
            <Flex>
              <ALink
                href="https://github.com/wheelroom/wheelroom-io"
                ncss={{ ...buttonPrimaryStyle }}
              >
                Get started
              </ALink>
              <Button
                type="button"
                title={`Current theme is ` + currentThemeMode}
                ariaLabel={`Current theme is ` + currentThemeMode}
                ncss={{
                  ...buttonSecondaryStyle,
                  ml: 2,
                  textTransform: 'capitalize',
                  minWidth: '70px',
                }}
                value=""
                onClick={() => handleThemeMode()}
              >
                {currentThemeMode}
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}
