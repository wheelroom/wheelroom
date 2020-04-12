import { NavLogoPreset, navLogoPreset } from './nav-logo-preset'
import { NavActionsPreset, navActionsPreset } from './nav-actions-preset'
import { NavDialogPreset, navDialogPreset } from './nav-dialog-preset'
import { NcssProps } from '../../../types'
import { NavListPreset, navListPreset } from './nav-list-preset'

export interface PageSectionNavigationHeaderPreset {
  skipToContent: { ncss: NcssProps }
  wrapper: { ncss: NcssProps }
  container: { ncss: NcssProps }
  menu: {
    nav: { ncss: NcssProps }
    navLogo: NavLogoPreset
    navList: NavListPreset
    navActions: NavActionsPreset
    modalDialog: {
      container: { ncss: NcssProps }
      openMenuButton: { ncss: NcssProps }
      navDialog: NavDialogPreset
    }
  }
}

export const navigationHeaderPreset: PageSectionNavigationHeaderPreset = {
  skipToContent: {
    ncss: {
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
  },
  wrapper: {
    ncss: {
      bg: 'bg',
      width: '100%',
      height: '70px',
      borderBottom: '1px solid',
      borderColor: 'border',
    },
  },
  container: {
    ncss: {
      height: '100%',
      justifyContent: 'space-between',
      px: 3,
    },
  },
  menu: {
    nav: {
      ncss: {
        flex: '1',
        alignItems: 'center',
        display: ['none', 'none', 'flex'],
      },
    },
    navLogo: navLogoPreset,
    navList: {
      list: { ncss: { ...navListPreset.list.ncss, flex: '1 1 auto' } },
      item: {
        ncss: {
          ...navListPreset.item.ncss,
          m: 0,
          px: 2,
          py: 3,
        },
      },
    },
    navActions: navActionsPreset,
    modalDialog: {
      container: {
        ncss: {
          display: ['flex', 'flex', 'none'],
          flex: '1',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
      },
      openMenuButton: { ncss: {} },
      navDialog: navDialogPreset,
    },
  },
}
