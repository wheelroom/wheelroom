import { NcssProps } from '../../../types'
import { ParagraphElementStyle } from '../../../element/resets/paragraph-reset'
import { IconElementStyle } from '../../../element/resets/icon-reset'

export interface BrandingWheelStyle {
  ncss: NcssProps
  logo: NcssProps
  link: {
    ncss: NcssProps
    icon: IconElementStyle
  }
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
      display: 'inline-flex',
      fontFamily: 'branding',
      textDecoration: 'none',
    },
    icon: {
      ncss: {
        label: 'branding-icon',
        w: '16px',
        h: '16px',
        my: 'auto',
      },
    },
  },
  sup: {
    ncss: {},
  },
}
