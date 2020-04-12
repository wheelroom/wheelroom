import { NcssProps } from '../../../types'
import { navListPreset } from './nav-list-preset'

export interface NavSocialLinksPreset {
  list: { ncss: NcssProps }
  action: { ncss: NcssProps }
  icon: { ncss: NcssProps }
}

export const navSocialLinksPreset: NavSocialLinksPreset = {
  list: navListPreset.list,
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
