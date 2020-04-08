import { NcssProps } from '../../../../elements/types'

export interface NavLogoTreeStyle {
  container: NcssProps
  link: NcssProps
}

export const navLogoStyle: NavLogoTreeStyle = {
  container: {
    label: 'logo',
    alignItems: 'center',
  },
  link: {
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
}
