import { NcssProps } from '../../../types'

export interface LogoPreset {
  container: { ncss: NcssProps }
  link: { ncss: NcssProps }
}

export const logoPreset: LogoPreset = {
  container: {
    ncss: {
      alignItems: 'center',
    },
  },
  link: {
    ncss: {
      fontFamily: 'display',
      textDecoration: 'none',
      fontSize: [4, 5],
      fontWeight: 5,
      color: 'text',
      mr: 5,
      sup: {
        color: 'metal',
        fontWeight: 3,
      },
    },
  },
}
