import React from 'react'
import { NavHeaderList } from './nav-header-list'
import { Box, Flex } from '../../elements/grid'
import { Button } from '../../elements/button'
import { ActionProps } from '../../../../models/action'
import { IconMap } from '../../../svg/feather/iconMap'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { PageProps } from '../../../../models/page/page'
import { Action } from '../../action/action'
import { Wheel } from '../../types'
import { ModalPreset } from './presets/modal-preset'

interface ModalWheel extends Wheel {
  style: ModalPreset
}

export const Modal = (props: {
  action: ActionProps
  activeThemeId?: string
  closeMenu: () => void
  menuVisible: boolean
  pages: PageProps[]
  pageSectionInfo: PageSectionInfo
  wheel: ModalWheel
  toggleTheme: () => void
}) => {
  const XIcon = IconMap.x
  return (
    <Box
      is="div"
      role="dialog"
      tabIndex={-1}
      ariaHidden={props.menuVisible ? false : undefined}
      ariaModal={props.menuVisible ? true : undefined}
      hidden={true}
      wheel={{
        ...props.wheel,
        style: props.menuVisible
          ? props.wheel.style.container.menuVisible.yes
          : props.wheel.style.container.menuVisible.no,
      }}
    >
      <Flex
        is="section"
        role="document"
        id="header-navigation"
        ariaLabel="Header navigation"
        wheel={{
          ...props.wheel,
          style: props.menuVisible
            ? props.wheel.style.container.menuVisible.yes
            : props.wheel.style.container.menuVisible.no,
        }}
      >
        <Button
          ariaLabel="Close header navigation"
          value=""
          role="button"
          onClick={() => props.closeMenu()}
          wheel={{ ...props.wheel, style: props.wheel.style.closeMenuButton }}
        >
          <Box ariaHidden={true} wheel={props.wheel}>
            <XIcon wheel={props.wheel} />
          </Box>
        </Button>
        <NavHeaderList
          wheel={{ ...props.wheel, style: props.wheel.style.list }}
          pages={props.pages}
        />
        <Flex
          is="div"
          wheel={{ ...props.wheel, style: props.wheel.style.actions.container }}
        >
          {props.pageSectionInfo.hasAction && (
            <Action
              wheel={{
                ...props.wheel,
                style: props.wheel.style.actions.action,
              }}
              {...props.action}
            />
          )}
          <Button
            type="button"
            title={`Current theme is ` + props.activeThemeId}
            ariaLabel={`Current theme is ` + props.activeThemeId}
            value=""
            onClick={() => props.toggleTheme()}
            wheel={{
              ...props.wheel,
              style: props.wheel.style.actions.themeButton,
            }}
          >
            {props.activeThemeId}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
