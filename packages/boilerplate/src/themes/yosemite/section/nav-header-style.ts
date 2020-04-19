import { NavHeaderWheelStyle } from '../../../wheelroom/wheels/section/navigation-header/presets/nav-header-preset'
import { wrapperStyle } from '../elements/grid-style'
import {
  primaryButtonStyle,
  secondaryButtonStyle,
} from '../elements/button-style'

export const navHeaderStyle: NavHeaderWheelStyle = {
  skipToContent: {
    ncss: {
      ':focus': {
        bg: 'amber',
        color: 'caviar',
      },
    },
  },
  wrapper: {
    ncss: {
      ...wrapperStyle,
      borderColor: 'sectionBorder',
    },
  },
  container: {
    ncss: {},
  },
  branding: {
    ncss: {},
    logo: {
      ncss: {},
    },
    link: {
      ncss: {
        color: 'sectionText',
      },
    },
    sup: {
      ncss: {
        color: 'metal',
      },
    },
  },
  navHeader: {
    ncss: {},
    list: {
      ncss: {},
      listItem: {
        ncss: {},
        link: {
          ncss: {},
        },
      },
    },
    actions: {
      ncss: {},
      action: primaryButtonStyle,
      themeButton: secondaryButtonStyle,
    },
  },
  modal: {
    ncss: {},
    button: {
      ncss: {},
    },
    dialog: {
      container: {
        visible: {
          ncss: {},
        },
        hidden: {
          ncss: {},
        },
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
          ncss: {
            bg: 'sectionBg',
            borderColor: 'modalBorder',
            borderRadius: 4,
            boxShadow: '0 0 16px',
            color: 'modalShadow',
          },
        },
        hidden: {
          ncss: {},
        },
        closeNavigationButton: {
          ncss: {},
          icon: {
            ncss: {
              color: 'white',
            },
          },
        },
        list: {
          ncss: {},
          listItem: {
            ncss: {
              borderColor: 'sectionBorder',
            },
            link: {
              ncss: {},
            },
          },
        },
        actions: {
          ncss: {
            flexDirection: 'row',
          },
          action: {
            ncss: {
              ...primaryButtonStyle,
              mb: 0,
              w: [1 / 2],
            },
          },
          themeButton: {
            ncss: {
              ...secondaryButtonStyle,
              ml: 2,
              w: [1 / 2],
            },
          },
        },
      },
    },
  },
}
