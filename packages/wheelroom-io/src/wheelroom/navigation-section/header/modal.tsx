import React from 'react'
import {
  Box,
  Wheel,
  Flex,
  Button,
  NcssNode,
  Ncss,
  getNcssSwitch,
  FeatherIcon,
} from '@wheelroom/core'

import { NavigationModel } from '../../navigation/model'
import {
  ActionsNavigation,
  ActionsNavigationNcssTree,
} from '../../navigation/variants/actions-navigation'
import {
  MenuNavigation,
  MenuNavigationNcssTree,
} from '../../navigation/variants/menu-navigation'
import {
  SocialNavigation,
  SocialNavigationNcssTree,
} from '../../navigation/variants/social-navigation'

export interface ModalNcssTree {
  ncssSwitch: Record<'visible' | 'hidden', Ncss>
  overlay: {
    ncssSwitch: Record<'visible' | 'hidden', Ncss>
  }
  document: {
    ncssSwitch: Record<'visible' | 'hidden', Ncss>
  }
  closeButton: {
    icon: NcssNode
  } & NcssNode
  actions: ActionsNavigationNcssTree
  menu: MenuNavigationNcssTree
  social: SocialNavigationNcssTree
}

interface ModalWheel extends Wheel {
  style: ModalNcssTree
}

export interface ModalProps {
  buttonName?: string
  closeMenu: () => void
  hideActions?: boolean
  hideThemeButton?: boolean
  hideMenu?: boolean
  hideSocial?: boolean
  menuVisible: boolean
  navigation: NavigationModel[]
  toggleTheme: () => void
  wheel: ModalWheel
}

export const Modal = (props: ModalProps) => {
  return (
    <Box
      is="div"
      role="dialog"
      tabIndex={-1}
      ariaHidden={props.menuVisible ? false : undefined}
      ariaModal={props.menuVisible ? true : undefined}
      hidden={!props.menuVisible ? true : undefined}
      wheel={{
        ...props.wheel,
        style: getNcssSwitch(
          props.wheel.style,
          props.menuVisible ? 'visible' : 'hidden'
        ),
      }}
    >
      <Box
        is="div"
        ariaHidden={true}
        wheel={{
          ...props.wheel,
          style: getNcssSwitch(
            props.wheel.style.overlay,
            props.menuVisible ? 'visible' : 'hidden'
          ),
        }}
        onClick={() => props.closeMenu()}
      />
      <Flex
        is="section"
        role="document"
        id="header-navigation"
        ariaLabel="Header navigation"
        wheel={{
          ...props.wheel,
          style: getNcssSwitch(
            props.wheel.style.document,
            props.menuVisible ? 'visible' : 'hidden'
          ),
        }}
      >
        <Button
          ariaLabel="Close navigation"
          value=""
          role="button"
          type="button"
          onClick={() => props.closeMenu()}
          wheel={{
            ...props.wheel,
            style: props.wheel.style.closeButton,
          }}
        >
          <Flex ariaHidden={true} wheel={props.wheel}>
            <FeatherIcon
              icon="x"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.closeButton.icon,
              }}
            />
          </Flex>
        </Button>
        <MenuNavigation
          wheel={{
            ...props.wheel,
            style: props.wheel.style.menu,
          }}
          maxSegments={10}
          navigation={props.navigation}
          hideMenu={props.hideMenu}
        />
        <SocialNavigation
          wheel={{
            ...props.wheel,
            style: props.wheel.style.social,
          }}
          maxSegments={1}
          navigation={props.navigation}
          hideSocial={props.hideSocial}
        />
        <ActionsNavigation
          wheel={{
            ...props.wheel,
            style: props.wheel.style.actions,
          }}
          maxSegments={1}
          navigation={props.navigation}
          buttonName={props.buttonName}
          hideActions={props.hideActions}
          hideThemeButton={props.hideThemeButton}
          toggleTheme={props.toggleTheme}
        />
      </Flex>
    </Box>
  )
}
