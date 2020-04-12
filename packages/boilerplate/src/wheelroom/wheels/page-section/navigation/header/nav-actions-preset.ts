import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from '../../../elements/button-theme'
import { NcssProps } from '../../../types'

export interface NavActionsTreeStyle {
  container: NcssProps
  action: NcssProps
  themeButton: NcssProps
}

export const navActionsPreset: NavActionsTreeStyle = {
  container: {},
  action: buttonPrimaryStyle,
  themeButton: {
    ...buttonSecondaryStyle,
    ml: 2,
    textTransform: 'capitalize',
    minWidth: '70px',
  },
}
