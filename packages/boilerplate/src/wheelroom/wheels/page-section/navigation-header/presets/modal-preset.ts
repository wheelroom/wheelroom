import {
  modalDialogOpenPreset,
  modalDialogPreset,
  modalDialogContentOpenPreset,
  modalDialogContentPreset,
} from './modal-dialog-preset'
import { NcssProps } from '../../../types'
import { NavHeaderListPreset } from './nav-header-list-preset'

export interface ModalPreset {
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
  list: NavHeaderListPreset
  actions: {
    container: { ncss: NcssProps }
    action: { ncss: NcssProps }
    themeButton: { ncss: NcssProps }
  }
}

export const modalPreset: ModalPreset = {
  container: {
    menuVisible: { yes: modalDialogOpenPreset, no: modalDialogPreset },
  },
  document: {
    menuVisible: {
      yes: modalDialogContentOpenPreset,
      no: modalDialogContentPreset,
    },
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
    listItem: {
      link: { ncss: {} },
      ncss: {
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
