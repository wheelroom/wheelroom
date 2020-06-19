import { NcssProps, IconElementStyle } from '../../../../src-core'

export interface BrandNavigationSegmentWheelStyle {
  ncss: NcssProps
  logo: NcssProps
  action: {
    ncss: NcssProps
    icon: IconElementStyle
  }
}

export const brandNavigationSegmentPreset: BrandNavigationSegmentWheelStyle = {
  ncss: {
    label: 'brand-navigation-segment',
    alignItems: 'center',
    mr: 3,
  },
  logo: {
    ncss: {
      label: 'brand-navigation-segment-logo',
    },
  },
  action: {
    ncss: {
      label: 'brand-navigation-segment-action',
      display: 'inline-flex',
      fontFamily: 'branding',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    icon: {
      ncss: {
        label: 'brand-navigation-segment-action-icon',
        w: '15px',
        h: '15px',
        my: 'auto',
        transform: 'translateX(4px)',
      },
    },
  },
}
