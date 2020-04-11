import { buttonPrimaryStyle } from '../../../elements/button-preset'
import {
  commonNavigationStyle,
  listStyle,
  navStyle,
} from '../common/navigation-common-preset'
import { NcssProps } from '../../../elements/types'
import { NavListTreeStyle } from '../common/nav-list'
import { NavLogoTreeStyle, navLogoPreset } from './nav-logo-preset'
import { NavActionsTreeStyle, navActionsPreset } from './nav-actions-preset'
import { NavDialogTreeStyle, navDialogPreset } from './nav-dialog-preset'

export interface PageSectionNavigationHeaderPreset {
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

export const navigationHeaderTreeStyle: PageSectionNavigationHeaderPreset = {
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
    navLogo: navLogoPreset,
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
    navActions: navActionsPreset,
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
      navDialog: navDialogPreset,
    },
  },
}
