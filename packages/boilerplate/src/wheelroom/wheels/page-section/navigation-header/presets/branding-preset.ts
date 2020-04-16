import { NcssProps } from '../../../types'
import { ALinkPreset } from '../../../elements/a-link-preset'

export interface BrandingPreset {
  ncss: NcssProps
  logo: NcssProps
  link: ALinkPreset
}

export const brandingPreset: BrandingPreset = {
  ncss: {
    label: 'branding',
    alignItems: 'center',
    mr: 3,
  },
  logo: {
    ncss: {
      label: 'branding-logo',
    },
  },
  link: {
    ncss: {
      label: 'branding-link',
      fontFamily: 'branding',
      textDecoration: 'none',
      sup: {},
    },
  },
}
