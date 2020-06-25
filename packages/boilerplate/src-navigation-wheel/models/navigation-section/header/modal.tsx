import React from 'react'
import { NavigationSegmentProps } from '../../navigation-segment/model-types'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { Box, Wheel, Flex, Button, NcssObjectProps } from '../../../../src-core'
import { FeatherIcon } from '../../../../src-core/elements/element/icon'
import { NavigationSegmentModelStyle } from '../../navigation-segment/model-style-types'
import { ThemeButton } from './theme-button'

export interface ModalWheelStyle {
  container: {
    // ncssSwitch: Record<'visible' | 'hidden', any>
    visible: NcssObjectProps
    hidden: NcssObjectProps
  }
  overlay: {
    visible: NcssObjectProps
    hidden: NcssObjectProps
  }
  document: {
    visible: NcssObjectProps
    hidden: NcssObjectProps
    closeNavigationButton: {
      icon: NcssObjectProps
    } & NcssObjectProps
    menu: {
      segment: NavigationSegmentModelStyle
    } & NcssObjectProps
    actions: {
      segment: NavigationSegmentModelStyle
      themeButton: NcssObjectProps
    } & NcssObjectProps
  } & NcssObjectProps
}

interface ModalWheel extends Wheel {
  style: ModalWheelStyle
}

export interface ModalWheelProps {
  actionsSegments: NavigationSegmentProps[]
  buttonName?: string
  closeMenu: () => void
  hideThemeButton?: boolean
  menuSegments: NavigationSegmentProps[]
  menuVisible: boolean
  toggleTheme: () => void
  wheel: ModalWheel
}

export const Modal = (props: ModalWheelProps) => {
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
        style: props.menuVisible
          ? props.wheel.style.container.visible
          : props.wheel.style.container.hidden,
      }}
    >
      <Box
        is="div"
        ariaHidden={true}
        wheel={{
          ...props.wheel,
          style: props.menuVisible
            ? props.wheel.style.overlay.visible
            : props.wheel.style.overlay.hidden,
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
          style: props.menuVisible
            ? props.wheel.style.document.visible
            : props.wheel.style.document.hidden,
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
            style: props.wheel.style.document.closeNavigationButton,
          }}
        >
          <Flex ariaHidden={true} wheel={props.wheel}>
            <FeatherIcon
              icon="x"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.document.closeNavigationButton.icon,
              }}
            />
          </Flex>
        </Button>
        <Flex
          is="nav"
          wheel={{ ...props.wheel, style: props.wheel.style.document.menu }}
        >
          <NavigationSegment
            hideActionHeading={false}
            hideActionIcon={false}
            hideSegmentHeading={true}
            maxSegments={1}
            navigationSegment={props.menuSegments}
            wheel={{
              ...props.wheel,
              style: props.wheel.style.document.menu.segment,
            }}
          />
        </Flex>
        <Flex
          is="div"
          wheel={{ ...props.wheel, style: props.wheel.style.document.actions }}
        >
          <NavigationSegment
            hideActionHeading={false}
            hideActionIcon={true}
            hideSegmentHeading={true}
            maxSegments={1}
            navigationSegment={props.actionsSegments}
            wheel={{
              ...props.wheel,
              style: props.wheel.style.document.actions.segment,
            }}
          />
          <ThemeButton
            wheel={{
              ...props.wheel,
              style: props.wheel.style.document.actions.themeButton,
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
