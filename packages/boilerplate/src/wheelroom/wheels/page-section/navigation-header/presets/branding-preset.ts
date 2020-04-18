import { NcssProps } from '../../../types'
import { ALinkReset } from '../../../elements/resets/a-link-reset'
import { ParagraphReset } from '../../../elements/resets/paragraph-reset'

export interface BrandingPreset {
  ncss: NcssProps
  logo: NcssProps
  link: ALinkReset
  sup: ParagraphReset
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
