import { NcssProps } from '../../../types'
import {
  NavFooterListItemLinkWheelStyle,
  navFooterListItemLinkPreset,
} from './nav-footer-list-item-link-preset'

export interface NavFooterListItemPresetWheelStyle {
  ncss: NcssProps
  link: NavFooterListItemLinkWheelStyle
}

export const navFooterListItemPreset: NavFooterListItemPresetWheelStyle = {
  ncss: {
    label: 'nav-footer-list-item',
    listStyle: 'none',
  },
  link: navFooterListItemLinkPreset,
}
