import { buttonPrimaryStyle } from '../../../../../element-styles/button'
import {
  commonNavigationStyle,
  listStyle,
  navStyle,
} from '../common/navigation-common-style'
import { NcssProps } from '../../../../elements/types'
import { NavListTreeStyle } from '../common/nav-list'
import { NavLogoTreeStyle, navLogoStyle } from './nav-logo-style'
import { NavActionsTreeStyle, navActionsStyle } from './nav-actions-style'
import { NavDialogTreeStyle, navDialogStyle } from './nav-dialog-style'

export interface PageSectionNavigationHeaderTreeStyle {
  skipToContent: NcssProps
  wrapper: NcssProps
  container: NcssProps
  menu: {
    nav: NcssProps
    navLogo: NavLogoTreeStyle
    navList: NavListTreeStyle
    navActions: NavActionsTreeStyle
    modalDialog: {
      container: NcssProps
      openMenuButton: NcssProps
      navDialog: NavDialogTreeStyle
    }
  }
}

export const navigationHeaderTreeStyle: PageSectionNavigationHeaderTreeStyle = {
  skipToContent: {
    position: 'absolute',
    left: '-100%',
    ':focus': {
      w: 1,
      left: 0,
      top: 0,
      right: 0,
      color: 'black',
      fontFamily: 'text',
      fontWeight: 5,
      backgroundColor: 'amber',
      textAlign: 'center',
      lineHeight: '70px',
      justifyContent: 'center',
      zIndex: 1002,
    },
  },
  wrapper: {
    bg: 'bg',
    width: '100%',
    height: '70px',
    borderBottom: '1px solid',
    borderColor: 'border',
  },
  container: {
    height: '100%',
    justifyContent: 'space-between',
    px: 3,
  },
  menu: {
    nav: { ...navStyle, display: ['none', 'none', 'flex'] },
    navLogo: navLogoStyle,
    navList: {
      list: { ...listStyle, flex: '1 1 auto' },
      listItem: {
        linkStyle: {
          ...commonNavigationStyle,
          m: 0,
          px: 2,
          py: 3,
        },
      },
    },
    navActions: navActionsStyle,
    modalDialog: {
      container: {
        display: ['flex', 'flex', 'none'],
        flex: '1',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      openMenuButton: {
        ...buttonPrimaryStyle,
      },
      navDialog: navDialogStyle,
    },
  },
}
