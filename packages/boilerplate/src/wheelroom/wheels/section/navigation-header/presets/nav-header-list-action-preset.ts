import { NcssProps } from '../../../types'
import {
  NavHeaderListItemLinkWheelStyle,
  navHeaderListItemLinkPreset,
} from './nav-header-list-item-link-preset'

export interface NavHeaderListActionWheelStyle {
  ncss: NcssProps
  link: NavHeaderListItemLinkWheelStyle
}

export const navHeaderListActionPreset: NavHeaderListActionWheelStyle = {
  ncss: {
    label: 'nav-header-list-action',
    listStyle: 'none',
  },
  link: navHeaderListItemLinkPreset,
}
