import { NcssProps } from '../../../types'
import { ButtonPreset, buttonPreset } from '../../../elements/button-preset'
import { GridPreset } from '../../../elements/grid-preset'

export interface NavHeaderActionsPreset {
  container: GridPreset
  action: ButtonPreset
  themeButton: NcssProps
}

export const navHeaderActionsPreset: NavHeaderActionsPreset = {
  container: {
    ncss: {},
  },
  action: buttonPreset,
  themeButton: {
    ncss: {
      ml: 2,
      textTransform: 'capitalize',
    },
  },
}
