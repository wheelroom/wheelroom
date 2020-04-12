import React from 'react'
import { NavList } from './nav-list'
import { Box, Flex } from '../../elements/grid'
import { Button } from '../../elements/button'
import { ActionProps } from '../../../../models/action'
import { IconMap } from '../../../svg/feather/iconMap'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { PageProps } from '../../../../models/page/page'
import { Action } from '../../action/action'
import { Wheel } from '../../types'
import { NavDialogPreset } from './presets/nav-dialog-preset'

interface NavDialogWheel extends Wheel {
  style: NavDialogPreset
}

export const NavDialog = (props: {
  action: ActionProps
  activeThemeId?: string
  closeMenu: () => void
  menuVisible: boolean
  pages: PageProps[]
  pageSectionInfo: PageSectionInfo
  wheel: NavDialogWheel
  toggleTheme: () => void
}) => {
  const XIcon = IconMap.x
  return (
    <Box
      is="div"
      role="dialog"
      tabIndex={-1}
      ncss={
        props.menuVisible
          ? props.wheel.style.container.menuVisible.yes.ncss
          : props.wheel.style.container.menuVisible.no.ncss
      }
      ariaHidden={props.menuVisible ? false : undefined}
      ariaModal={props.menuVisible ? true : undefined}
      hidden={true}
      wheel={props.wheel}
    >
      <Flex
        is="section"
        role="document"
        id="header-navigation"
        ncss={
          props.menuVisible
            ? props.wheel.style.document.menuVisible.yes.ncss
            : props.wheel.style.document.menuVisible.no.ncss
        }
        ariaLabel="Header navigation"
        wheel={props.wheel}
      >
        <Button
          ariaLabel="Close header navigation"
          value=""
          role="button"
          onClick={() => props.closeMenu()}
          ncss={props.wheel.style.closeMenuButton.ncss}
          wheel={props.wheel}
        >
          <Box ariaHidden={true} wheel={props.wheel}>
            <XIcon />
          </Box>
        </Button>
        <NavList
          wheel={{ ...props.wheel, style: props.wheel.style.navList }}
          pages={props.pages}
        />
        <Flex
          is="div"
          ncss={props.wheel.style.actions.container}
          wheel={props.wheel}
        >
          {props.pageSectionInfo.hasAction && (
            <Action
              wheel={{ ...props.wheel, style: props.wheel.style.actions }}
              {...props.action}
            />
          )}
          <Button
            type="button"
            title={`Current theme is ` + props.activeThemeId}
            ariaLabel={`Current theme is ` + props.activeThemeId}
            ncss={props.wheel.style.actions.themeButton}
            value=""
            onClick={() => props.toggleTheme()}
            wheel={props.wheel}
          >
            {props.activeThemeId}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
