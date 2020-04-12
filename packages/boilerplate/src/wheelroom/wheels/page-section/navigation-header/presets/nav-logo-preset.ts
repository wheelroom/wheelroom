import { NcssProps } from '../../../types'

export interface NavLogoPreset {
  container: { ncss: NcssProps }
  link: { ncss: NcssProps }
}

export const navLogoPreset: NavLogoPreset = {
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
