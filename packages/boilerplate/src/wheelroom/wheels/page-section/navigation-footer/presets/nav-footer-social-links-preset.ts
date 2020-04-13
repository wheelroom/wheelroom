import { NcssProps } from '../../../types'

export interface NavFooterSocialLinksPreset {
  ncss: NcssProps
  action: { ncss: NcssProps }
  icon: { ncss: NcssProps }
}

export const navFooterSocialLinksPreset: NavFooterSocialLinksPreset = {
  ncss: {},
  action: {
    ncss: {
      display: 'inline-flex',
      p: 1,
    },
  },
  icon: {
    ncss: {
      width: '20px',
      height: '20px',
      color: 'metal',
      strokeWidth: '1px',
      ':hover': {
        color: 'text',
      },
    },
  },
}
