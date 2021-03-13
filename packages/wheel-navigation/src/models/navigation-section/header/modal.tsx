import React from 'react'
import {
  Box,
  Wheel,
  Flex,
  Button,
  NcssNode,
  Ncss,
  getNcssSwitch,
} from '@wheelroom/core'
import { FeatherIcon } from '@wheelroom/core'
import { NavigationSegmentNcssTree } from '../../navigation-segment/ncss-tree'
import { ThemeButton } from './theme-button'
import { NavigationModel } from '../../navigation/model'
import { ActionsNavigation } from '../../navigation/variants/actions-navigation'
import { MenuNavigation } from '../../navigation/variants/menu-navigation'
import { SocialNavigation } from '../../navigation/variants/social-navigation'

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
  actions: { segment: NavigationSegmentNcssTree; themeButton: NcssNode }
  menu: { segment: NavigationSegmentNcssTree }
  social: { segment: NavigationSegmentNcssTree }
}

interface ModalWheel extends Wheel {
  style: ModalNcssTree
}

export interface ModalProps {
  buttonName?: string
  closeMenu: () => void
  hideThemeButton?: boolean
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
        <Flex
          is="nav"
          wheel={{ ...props.wheel, style: props.wheel.style.menu }}
        >
          <MenuNavigation
            wheel={{
              ...props.wheel,
              style: props.wheel.style.menu.segment,
            }}
            maxSegments={10}
            navigation={props.navigation}
          />
        </Flex>
        <Flex
          is="div"
          wheel={{ ...props.wheel, style: props.wheel.style.social }}
        >
          <SocialNavigation
            wheel={{
              ...props.wheel,
              style: props.wheel.style.social.segment,
            }}
            maxSegments={1}
            navigation={props.navigation}
          />
        </Flex>

        <Flex
          is="div"
          wheel={{ ...props.wheel, style: props.wheel.style.actions }}
        >
          <ActionsNavigation
            wheel={{
              ...props.wheel,
              style: props.wheel.style.actions.segment,
            }}
            maxSegments={1}
            navigation={props.navigation}
          />
          <ThemeButton
            wheel={{
              ...props.wheel,
              style: props.wheel.style.actions.themeButton,
            }}
            buttonName={props.buttonName}
            hideThemeButton={props.hideThemeButton}
            toggleTheme={props.toggleTheme}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
