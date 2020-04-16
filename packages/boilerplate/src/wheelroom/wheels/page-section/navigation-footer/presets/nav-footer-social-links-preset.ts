import { NcssProps } from '../../../types'

export interface NavFooterSocialLinksPreset {
  ncss: NcssProps
  item: NcssProps
  action: NcssProps
  icon: NcssProps
}

export const navFooterSocialLinksPreset: NavFooterSocialLinksPreset = {
  ncss: {
    listStyle: 'none',
  },
  item: {
    ncss: {
      my: 0,
      pl: 0,
    },
  },
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
      strokeWidth: '1px',
      ':hover': {},
    },
  },
}
