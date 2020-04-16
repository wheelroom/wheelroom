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
    visible: NcssProps
    hidden: NcssProps
  }
  document: {
    visible: NcssProps
    hidden: NcssProps
  }
  closeMenuButton: NcssProps
  list: NavHeaderListPreset
  actions: {
    ncss: NcssProps
    action: NcssProps
    themeButton: NcssProps
  }
}

export const modalPreset: ModalPreset = {
  container: {
    visible: {
      ncss: {
        ...modalDialogOpenPreset.ncss,
        label: 'modal-is-visible',
      },
    },
    hidden: {
      ncss: {
        ...modalDialogPreset.ncss,
        label: 'modal-is-hidden',
      },
    },
  },
  document: {
    visible: {
      ncss: {
        ...modalDialogContentOpenPreset.ncss,
        label: 'document-is-visible',
      },
    },
    hidden: {
      ncss: {
        ...modalDialogContentPreset.ncss,
        label: 'document-is-hidden',
      },
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
      label: 'modal-list',
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
        borderBottom: '1px solid black',
        a: {
          p: 3,
        },
      },
    },
    listItem: {
      ncss: {
        label: 'modal-list-item',
        m: 0,
      },
      link: {
        ncss: {
          label: 'modal-list-item-link',
          display: 'block',
        },
      },
    },
  },
  actions: {
    ncss: {
      w: 1,
      p: 3,
    },
    action: {
      ncss: {
        display: 'block',
        w: 1,
        mb: 2,
      },
    },
    themeButton: {
      ncss: {
        w: 1,
      },
    },
  },
}
