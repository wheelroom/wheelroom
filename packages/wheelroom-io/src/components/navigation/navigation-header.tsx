/**
 * Component variation
 *
 * Component type: navigation
 * Variation: Single
 *
 */

import React, { Fragment, useContext, useReducer, useState } from 'react'
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
const Icon = IconMap.x

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

  const navSegment = props.segments[0] as NavigationSegmentProps

  const toggleTheme = () => {
    setActiveTheme(activeThemeId === 'light' ? 'dark' : 'light')
  }

  /** Modal – https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html */
  const initMenu = { visible: false }

  /** Restore :focus after user close the Modal */
  const [focus, setFocus] = useState('')
  const setLastFocus = (focus: string) => {
    setFocus(focus)
  }

  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'show':
        document.body.classList.add('modal-open')
        document.body.style.overflow = 'hidden'
        // set last element ID for restoring the focus
        setLastFocus(document.activeElement.id)
        return { visible: true }
      case 'hide':
        document.body.classList.remove('modal-open')
        document.body.style.overflow = ''
        // restore focus on previous element
        document.getElementById(focus).focus()
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
              ariaExpanded={state.visible === true}
              ariaPressed={state.visible === true}
              ariaControls="header-navigation"
              ariaLabel="Open header navigation"
              value=""
              role="button"
              ncss={{
                ...buttonPrimaryStyle,
              }}
              onClick={() => dispatch({ type: 'show' })}
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
                visibility: state.visible === true ? 'visible' : 'hidden',
              }}
              ariaHidden={state.visible === false ? false : undefined}
              ariaModal={state.visible === true ? true : undefined}
              hidden={true}
            >
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
                  onClick={() => dispatch({ type: 'hide' })}
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
                    <Icon />
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
