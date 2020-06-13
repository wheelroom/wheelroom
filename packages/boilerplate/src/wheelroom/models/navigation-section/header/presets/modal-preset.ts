import { NcssProps } from '../../../../types/wheel'
import { ButtonElementStyle } from '../../../../elements/resets/button-reset'
import {
  NavigationSegmentWheelStyle,
  navigationSegmentPreset,
} from '../../../navigation-segment/presets/navigation-segment-preset'
import {
  modalDialogContentOpenPreset,
  modalDialogContentPreset,
  modalDialogOpenPreset,
  modalDialogOverlayOpenPreset,
  modalDialogOverlayPreset,
  modalDialogPreset,
} from './modal-dialog-preset'

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
    menu: {
      ncss: NcssProps
      segment: NavigationSegmentWheelStyle
    }
    actions: {
      ncss: NcssProps
      segment: NavigationSegmentWheelStyle
      themeButton: ButtonElementStyle
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
        label: 'modal-close-button',
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
    menu: {
      ncss: {
        label: 'menu-navigation',
      },
      segment: navigationSegmentPreset,
    },
    actions: {
      ncss: {
        label: 'actions-navigation',
      },
      segment: navigationSegmentPreset,
      themeButton: {
        ncss: {
          label: 'modal-theme-button',
        },
      },
    },
  },
}
