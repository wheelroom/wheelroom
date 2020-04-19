import { NcssProps } from '../../../types'
import { ALinkElementStyle } from '../../../elements/resets/a-link-reset'
import { ParagraphElementStyle } from '../../../elements/resets/paragraph-reset'

export interface BrandingWheelStyle {
  ncss: NcssProps
  logo: NcssProps
  link: ALinkElementStyle
  sup: ParagraphElementStyle
}

export const brandingPreset: BrandingWheelStyle = {
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
