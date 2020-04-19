import { NcssProps } from '../../../types'
import {
  NavHeaderListItemWheelStyle,
  navHeaderListItemPreset,
} from './nav-header-list-item-preset'

export interface NavHeaderListWheelStyle {
  ncss: NcssProps
  listItem: NavHeaderListItemWheelStyle
}

export const navHeaderListPreset: NavHeaderListWheelStyle = {
  ncss: {
    label: 'nav-header-list',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    my: 0,
    pl: 0,
  },
  listItem: navHeaderListItemPreset,
}
