import { NcssProps } from '../../../types'

export interface NavFooterSocialListPreset {
  ncss: NcssProps
  item: NcssProps
  link: NcssProps
  icon: NcssProps
}

export const navFooterSocialListPreset: NavFooterSocialListPreset = {
  ncss: {
    label: 'nav-footer-social-list',
    display: 'flex',
    flexDirection: 'row',
    listPreset: 'none',
    flexWrap: 'wrap',
    my: 0,
    pl: 0,
  },
  item: {
    ncss: {
      label: 'nav-footer-social-list-item',
      listStyle: 'none',
      display: 'inline-flex',
      my: 0,
      pl: 0,
    },
  },
  link: {
    ncss: {
      label: 'nav-footer-social-link',
      px: 2,
      py: 3,
    },
  },
  icon: {
    ncss: {
      label: 'nav-footer-social-icon',
      width: '20px',
      height: '20px',
      strokeWidth: '1px',
    },
  },
}
