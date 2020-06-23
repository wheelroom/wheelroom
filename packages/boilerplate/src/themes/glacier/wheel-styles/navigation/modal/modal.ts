import { ModalWheelStyle } from '../../../../../../src-navigation-wheel/models/navigation-section/header/modal'
import { navigationSegment } from '../navigation-segment/navigation-segment'

export const modal: ModalWheelStyle = {
  container: {
    visible: {},
    hidden: {},
  },
  overlay: {
    visible: {
      ncss: {},
    },
    hidden: {
      ncss: {},
    },
  },
  document: {
    ncss: {},
    visible: {
      ncss: {},
    },
    hidden: {
      ncss: {},
    },
    closeNavigationButton: {
      ncss: {},
      icon: {
        ncss: {},
      },
    },
    menu: {
      ncss: {},
      segment: navigationSegment,
    },
    actions: {
      ncss: {},
      segment: navigationSegment,
      themeButton: {
        ncss: {},
      },
    },
  },
}
