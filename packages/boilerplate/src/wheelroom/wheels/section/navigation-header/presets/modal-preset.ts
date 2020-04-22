import {
  modalDialogContentOpenPreset,
  modalDialogContentPreset,
  modalDialogOpenPreset,
  modalDialogOverlayOpenPreset,
  modalDialogOverlayPreset,
  modalDialogPreset,
} from './modal-dialog-preset'
import { NcssProps } from '../../../types'
import { NavHeaderListWheelStyle } from './nav-header-list-preset'

export interface ModalWheelStyle {
  container: {
    visible: NcssProps
    hidden: NcssProps
  }
  overlay: {
    visible: NcssProps
    hidden: NcssProps
  }
  document: {
    ncss: NcssProps
    visible: NcssProps
    hidden: NcssProps
    closeNavigationButton: {
      ncss: NcssProps
      icon: NcssProps
    }
    list: NavHeaderListWheelStyle
    actions: {
      ncss: NcssProps
      action: NcssProps
      themeButton: NcssProps
    }
  }
}

export const modalPreset: ModalWheelStyle = {
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
  overlay: {
    visible: {
      ncss: {
        ...modalDialogOverlayOpenPreset.ncss,
        label: 'before-is-visible',
      },
    },
    hidden: {
      ncss: {
        ...modalDialogOverlayPreset.ncss,
        label: 'before-is-hidden',
      },
    },
  },
  document: {
    ncss: {},
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
    closeNavigationButton: {
      ncss: {
        mt: 3,
        mr: 3,
        p: 1,
        w: '36px',
        h: '36px',
      },
      icon: {
        ncss: {
          w: '26px',
          h: '26px',
        },
      },
    },
    list: {
      ncss: {
        label: 'modal-list',
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        flexWrap: 'wrap',
        ListElementStyle: 'none',
        mb: 0,
        mt: 0,
        pl: 0,
        w: 1,
      },
      listItem: {
        ncss: {
          label: 'modal-list-item',
          borderBottom: '1px solid black',
          m: 0,
        },
        link: {
          ncss: {
            label: 'modal-list-item-link',
            display: 'block',
            textDecoration: 'none',
            p: 3,
            '&.active': { textDecoration: 'underline' },
            ':hover': { textDecoration: 'underline' },
          },
        },
      },
    },
    actions: {
      ncss: {
        label: 'modal-actions',
        flexDirection: 'column',
        w: 1,
        p: 3,
      },
      action: {
        ncss: {
          label: 'modal-actions-action',
        },
      },
      themeButton: {
        ncss: {
          label: 'modal-actions-theme-button',
        },
      },
    },
  },
}
