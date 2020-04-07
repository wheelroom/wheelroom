import { PageSectionNavigationFooterTreeStyle } from './page-section-navigation-footer-tree'
import {
  commonNavigationStyle,
  listStyle,
} from '../common/navigation-common-style'

export const navigationFooterTreeStyle: PageSectionNavigationFooterTreeStyle = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
  },
  container: {
    borderTop: '1px solid transparent',
    borderColor: 'border',
    px: 3,
  },

  menus: {
    nav: {
      h: '84px',
      flex: 1,
      justifyContent: ['space-evenly', 'space-between'],
      flexDirection: ['column', 'row'],
      alignItems: 'center',
    },
    navList: {
      list: listStyle,
      listItem: {
        linkStyle: {
          ...commonNavigationStyle,
          m: 0,
          ml: [2, 0],
          mr: [2, 3],
        },
      },
    },
    socialNavLinks: {
      list: listStyle,
      action: {
        display: 'inline-flex',
        p: 1,
      },
      icon: {
        label: 'icon',
        width: '20px',
        height: '20px',
        color: 'metal',
        strokeWidth: '1px',
        ':hover': {
          color: 'text',
        },
      },
    },
  },
  navLegal: {
    container: {
      borderTop: '1px solid transparent',
      borderColor: 'border',
      px: 3,
    },
    innerContainer: {
      label: 'legal',
      h: '48px',
      w: 1,
      alignItems: 'center',
      justifyContent: ['center', 'normal'],
    },
    text: { fontFamily: 'text', color: 'metal' },
    link: {
      ...commonNavigationStyle,
      display: 'inline-flex',
      color: 'metal',
    },
  },
}
