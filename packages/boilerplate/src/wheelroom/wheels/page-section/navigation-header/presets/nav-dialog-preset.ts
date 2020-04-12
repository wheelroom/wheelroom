import {
  modalOpenPreset,
  modalPreset,
  modalContentOpenPreset,
  modalContentPreset,
} from './nav-dialog-modal-preset'
import { NcssProps } from '../../../types'
import { NavListPreset, navListPreset } from './nav-list-preset'

export interface NavDialogPreset {
  container: {
    menuVisible: {
      yes: { ncss: NcssProps }
      no: { ncss: NcssProps }
    }
  }
  document: {
    menuVisible: {
      yes: { ncss: NcssProps }
      no: { ncss: NcssProps }
    }
  }
  closeMenuButton: { ncss: NcssProps }
  navList: NavListPreset
  actions: {
    container: { ncss: NcssProps }
    action: { ncss: NcssProps }
    themeButton: { ncss: NcssProps }
  }
}

export const navDialogPreset: NavDialogPreset = {
  container: { menuVisible: { yes: modalOpenPreset, no: modalPreset } },
  document: {
    menuVisible: { yes: modalContentOpenPreset, no: modalContentPreset },
  },
  closeMenuButton: {
    ncss: {
      mt: 3,
      mr: 3,
      p: 1,
      w: '36px',
      h: '36px',
    },
  },
  navList: {
    list: {
      ncss: {
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        flexWrap: 'wrap',
        listPreset: 'none',
        mb: 0,
        mt: 0,
        pl: 0,
        w: 1,
        li: {
          borderBottom: '1px solid transparent',
          borderColor: 'border',
          a: {
            p: 3,
          },
        },
      },
    },
    item: {
      ncss: {
        ...navListPreset.item.ncss,
        m: 0,
        px: 2,
        py: 3,
      },
    },
  },
  actions: {
    container: { ncss: { w: 1, p: 3 } },
    action: { ncss: { w: 1 } },
    themeButton: {
      ncss: {
        ml: 2,
        w: 1,
        textTransform: 'capitalize',
      },
    },
  },
}
