import { NcssProps } from '../../../types'
import {
  NavFooterListItemPresetWheelStyle,
  navFooterListItemPreset,
} from './nav-footer-list-item-preset'

export interface NavFooterListPresetWheelStyle {
  ncss: NcssProps
  listItem: NavFooterListItemPresetWheelStyle
}

export const navFooterListPreset: NavFooterListPresetWheelStyle = {
  ncss: {
    label: 'nav-footer-list',
    display: 'flex',
    flexDirection: 'row',
    ListElementStyle: 'none',
    flexWrap: 'wrap',
    my: 0,
    pl: 0,
  },
  listItem: navFooterListItemPreset,
}
