import { NcssProps } from '../../../types'

export interface NavHeaderActionsPreset {
  container: { ncss: NcssProps }
  action: { ncss: NcssProps }
  themeButton: { ncss: NcssProps }
}

export const navHeaderActionsPreset: NavHeaderActionsPreset = {
  container: { ncss: {} },
  action: { ncss: {} },
  themeButton: {
    ncss: {
      ml: 2,
      textTransform: 'capitalize',
      minWidth: '70px',
    },
  },
}
