import { NcssProps } from '../../../types'
import { ALinkPreset } from '../../../elements/a-link-preset'
import { ParagraphPreset } from '../../../elements/paragraph-preset'

export interface BrandingPreset {
  ncss: NcssProps
  logo: NcssProps
  link: ALinkPreset
  sup: ParagraphPreset
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
  sup: {
    ncss: {},
  },
}
