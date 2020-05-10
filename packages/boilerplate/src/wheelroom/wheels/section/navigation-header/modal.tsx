import React from 'react'
import { ActionProps } from '../../../../models/action'
import { Box, Flex } from '../../element/grid'
import { Button } from '../../element/button'
import { FeatherIcon } from '../../element/icon'
import { ModalWheelStyle } from './presets/modal-preset'
import { NavHeaderActions } from './nav-header-actions'
import { NavHeaderList } from './nav-header-list'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Wheel } from '../../types'

interface ModalWheel extends Wheel {
  style: ModalWheelStyle
}

export const Modal = (props: {
  action: ActionProps
  activeThemeId?: string
  closeMenu: () => void
  hideThemeSwitchButton?: boolean
  menuVisible: boolean
  actions: ActionProps[]
  pageSectionInfo: PageSectionInfo
  toggleTheme: () => void
  wheel: ModalWheel
}) => {
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
        <NavHeaderList
          wheel={{ ...props.wheel, style: props.wheel.style.document.list }}
          actions={props.actions}
        />
        <NavHeaderActions
          action={props.action}
          activeThemeId={props.activeThemeId}
          hideThemeSwitchButton={props.hideThemeSwitchButton}
          pageSectionInfo={props.pageSectionInfo}
          toggleTheme={props.toggleTheme}
          wheel={{
            ...props.wheel,
            style: props.wheel.style.document.actions,
          }}
        />
      </Flex>
    </Box>
  )
}
