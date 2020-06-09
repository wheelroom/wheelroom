import { NavHeaderWheelStyle } from '../../../wheelroom/wheels/section/navigation-header/presets/navigation-header-preset'
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
      icon: {
        ncss: {},
      },
    },
  },
  navigation: {
    ncss: {},
    menu: {
      ncss: {},
      heading: {
        ncss: {},
      },
      list: {
        ncss: {},
        item: {
          ncss: {},
          action: {
            ncss: {},
            icon: {
              ncss: {},
            },
          },
        },
      },
    },
    actions: {
      ncss: {},
      heading: {
        ncss: {},
      },
      list: {
        ncss: {},
        item: {
          ncss: {},
          action: {
            ncss: {},
            icon: {
              ncss: {},
            },
          },
        },
      },
    },
    themeButton: secondaryButtonStyle,
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
              icon: {
                ncss: {},
              },
            },
          },
        },
        actions: {
          ncss: {
            flexDirection: 'row',
          },
          link: {
            ncss: {
              ...primaryButtonStyle.ncss,
              mb: 0,
              w: [1 / 2],
            },
            icon: {
              ncss: {
                w: '16px',
                h: '16px',
                my: 'auto',
                transform: 'translateX(4px)',
              },
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
