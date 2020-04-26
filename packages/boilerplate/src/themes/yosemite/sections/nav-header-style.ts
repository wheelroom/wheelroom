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
        bg: 'skipToContentBg',
        color: 'skipToContentText',
        outlineColor: 'skipToContentOutline',
      },
    },
  },
  wrapper: {
    ncss: {
      ...wrapperStyle.ncss,
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
        ':focus': {
          outlineColor: 'outline',
        },
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
            bg: 'modalBg',
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
              ncss: {
                ':focus': {
                  outlineColor: 'outline',
                  outlineOffset: -2,
                },
              },
            },
          },
        },
        actions: {
          ncss: {
            flexDirection: 'row',
          },
          action: {
            ncss: {
              ...primaryButtonStyle.ncss,
              mb: 0,
              w: [1 / 2],
            },
          },
          themeButton: {
            ncss: {
              ...secondaryButtonStyle.ncss,
              ml: 2,
              w: [1 / 2],
            },
          },
        },
      },
    },
  },
}
