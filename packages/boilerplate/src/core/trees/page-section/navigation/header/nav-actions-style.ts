import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from '../../../../../element-styles/button'
import { NcssProps } from '../../../../elements/types'

export interface NavActionsTreeStyle {
  container: NcssProps
  action: NcssProps
  themeButton: NcssProps
}

export const navActionsStyle: NavActionsTreeStyle = {
  container: { label: 'nav-settings' },
  action: buttonPrimaryStyle,
  themeButton: {
    ...buttonSecondaryStyle,
    ml: 2,
    textTransform: 'capitalize',
    minWidth: '70px',
  },
}
