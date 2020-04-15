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
      fontSize: [5, 6],
      fontWeight: 6,
      color: 'text',
      mr: 5,
      sup: {
        color: 'gray',
        fontWeight: 3,
      },
    },
  },
}
