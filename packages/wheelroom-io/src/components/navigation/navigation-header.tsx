/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React, { Fragment, useContext, useState } from 'react'
import { Action, ActionProps } from '../action'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import { ALink } from '../../core/elements/a-link'
import { Box, Container, Flex } from '../../core/elements/grid'
import { Button } from '../../core/elements/button'
import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from '../../core/styles/button'
import { getThemeSwitcherStore } from '@jacco-meijer/admin-theme-switcher'
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
  modalContentStyle,
} from './navigation-styles'
import { IconMap } from '../../svg/feather/iconMap'
const XIcon = IconMap.x

interface NavigationHeaderProps extends NavigationProps {
  /** Action is displayed as a button at the right side of the navigation */
  action: ActionProps
}

export const NavigationHeader = (props: NavigationHeaderProps) => {
  /** Theme switcher admin module */
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleTheme = () => {
    setActiveTheme(activeThemeId === 'light' ? 'dark' : 'light')
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
            <Flex is="div" ncss={{ label: 'NavSettings' }}>
              <Action ncss={{ ...buttonPrimaryStyle }} {...props.action} />
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
              label: 'ModalDialog',
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
              onClick={() => setMenuVisible(true)}
            >
              Menu
            </Button>
            <Box
              is="div"
              role="dialog"
              tabIndex={-1}
              ncss={{
                label: 'Modal',
                ...modalStyle,
                visibility: menuVisible ? 'visible' : 'hidden',
              }}
              ariaHidden={menuVisible ? false : undefined}
              ariaModal={menuVisible ? true : undefined}
              hidden={true}
            >
              Modal layer visible
              <Flex
                is="section"
                role="document"
                id="header-navigation"
                ncss={{ label: 'ModalContent', ...modalContentStyle }}
                ariaLabel="Header navigation"
              >
                <Button
                  ariaLabel="Close header navigation"
                  value=""
                  role="button"
                  onClick={() => setMenuVisible(false)}
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
                <List is="ul" ncss={{ label: 'NavList', ...listMobileStyle }}>
                  <NavLinks pages={navSegment.pages} />
                </List>
                <Flex is="div" ncss={{ label: 'NavSettings', w: 1, p: 3 }}>
                  <Action
                    ncss={{ ...buttonPrimaryStyle, w: 1 }}
                    {...props.action}
                  />
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
