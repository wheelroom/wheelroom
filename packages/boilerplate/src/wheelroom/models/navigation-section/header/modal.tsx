import React from 'react'
import { Box, Flex } from '../../../elements/grid'
import { Button } from '../../../elements/button'
import { FeatherIcon } from '../../../elements/icon'
import { ModalWheelStyle } from './presets/modal-preset'
import { NavigationSegmentProps } from '../../navigation-segment/navigation-segment'
import { NavigationSegment } from '../../../wheels/model/navigation-segment/navigation-segment'
import { ThemeButton } from './theme-button'
import { Wheel } from '../../../types/wheel'

interface ModalWheel extends Wheel {
  style: ModalWheelStyle
}

export interface ModalWheelProps {
  actionsSegments: NavigationSegmentProps[]
  activeThemeId?: string
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
            activeThemeId={props.activeThemeId}
            hideThemeButton={props.hideThemeButton}
            toggleTheme={props.toggleTheme}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
