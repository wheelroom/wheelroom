import React from 'react'
import { NavigationSegmentModelProps } from '../../navigation-segment/model-types'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import {
  Box,
  Wheel,
  Flex,
  Button,
  NcssNode,
  Ncss,
  getNcssSwitch,
} from '../../../../src-core'
import { FeatherIcon } from '../../../../src-core/elements/element/icon'
import { NavigationSegmentModelNcssTree } from '../../navigation-segment/model-style-types'
import { ThemeButton } from './theme-button'

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
  menu: {
    segment: NavigationSegmentModelNcssTree
  } & NcssNode
  actions: {
    segment: NavigationSegmentModelNcssTree
    themeButton: NcssNode
  } & NcssNode
}

interface ModalWheel extends Wheel {
  style: ModalNcssTree
}

export interface ModalProps {
  actionsSegments: NavigationSegmentModelProps[]
  buttonName?: string
  closeMenu: () => void
  hideThemeButton?: boolean
  menuSegments: NavigationSegmentModelProps[]
  menuVisible: boolean
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
          <NavigationSegment
            hideActionHeading={false}
            hideActionIcon={false}
            hideSegmentHeading={true}
            maxSegments={1}
            navigationSegment={props.menuSegments}
            wheel={{
              ...props.wheel,
              style: props.wheel.style.menu.segment,
            }}
          />
        </Flex>
        <Flex
          is="div"
          wheel={{ ...props.wheel, style: props.wheel.style.actions }}
        >
          <NavigationSegment
            hideActionHeading={false}
            hideActionIcon={true}
            hideSegmentHeading={true}
            maxSegments={1}
            navigationSegment={props.actionsSegments}
            wheel={{
              ...props.wheel,
              style: props.wheel.style.actions.segment,
            }}
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
