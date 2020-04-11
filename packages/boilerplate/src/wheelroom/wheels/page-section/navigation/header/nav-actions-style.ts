import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from '../../../elements/button-preset'
import { NcssProps } from '../../../elements/types'

export interface NavActionsTreeStyle {
  container: NcssProps
  action: NcssProps
  themeButton: NcssProps
}

export const navActionsStyle: NavActionsTreeStyle = {
  container: {},
  action: buttonPrimaryStyle,
  themeButton: {
    ...buttonSecondaryStyle,
    ml: 2,
    textTransform: 'capitalize',
    minWidth: '70px',
  },
}
