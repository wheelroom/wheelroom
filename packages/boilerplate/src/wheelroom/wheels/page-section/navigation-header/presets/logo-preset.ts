import { NcssProps } from '../../../types'

export interface LogoPreset {
  ncss: NcssProps
  link: { ncss: NcssProps }
}

export const logoPreset: LogoPreset = {
  ncss: {
    label: 'logo',
    alignItems: 'center',
  },
  link: {
    ncss: {
      fontFamily: 'logo',
      textDecoration: 'none',
      sup: {},
    },
  },
}
