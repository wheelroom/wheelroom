import { NavigationHeaderWheelStyle } from '../../../../../wheelroom'
import { wrapperStyle } from '../elements/grid-style'
import {
  primaryButtonStyle,
  secondaryButtonStyle,
} from '../elements/button-style'
import { iconButtonSmallStyle } from '../elements/icon-style'

export const navigationSectionHeaderStyle: NavigationHeaderWheelStyle = {
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
  brand: {
    segment: {
      ncss: {},
      logo: {
        ncss: {},
      },
      action: {
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
  },
  menu: {
    ncss: {},
    segment: {
      ncss: {},
      heading: {
        ncss: {},
      },
      list: {
        ncss: {},
        item: {
          ncss: {},
          action: {
            ncss: {
              textDecoration: 'none',
              px: 2,
              py: 3,
              ':hover, &.active': {
                textDecoration: 'underline',
              },
            },
            icon: {
              ncss: {},
            },
          },
        },
      },
    },
  },
  actions: {
    ncss: {
      mx: -1,
    },
    segment: {
      ncss: {},
      heading: {
        ncss: {},
      },
      list: {
        ncss: {},
        item: {
          ncss: {},
          action: {
            ncss: {
              ...primaryButtonStyle.ncss,
              m: 1,
              w: 1,
            },
            icon: {
              ncss: {
                ...iconButtonSmallStyle.ncss,
              },
            },
          },
        },
      },
    },
    themeButton: {
      ncss: {
        ...secondaryButtonStyle.ncss,
        m: 1,
      },
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
        menu: {
          ncss: {
            w: 1,
          },
          segment: {
            ncss: {},
            heading: {
              ncss: {},
            },
            list: {
              ncss: {
                flexDirection: 'column',
                w: 1,
              },
              item: {
                ncss: {
                  borderBottom: '1px solid transparent',
                  borderColor: 'sectionBorder',
                  w: 1,
                },
                action: {
                  ncss: {
                    textDecoration: 'none',
                    px: 2,
                    py: 3,
                    w: 1,
                    ':hover, &.active': {
                      textDecoration: 'underline',
                    },
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
          },
        },
        actions: {
          ncss: {
            flexDirection: ['column', 'row', 'row'],
            w: 1,
            p: 1,
          },
          segment: {
            ncss: {},
            heading: {
              ncss: {},
            },
            list: {
              ncss: {
                w: 1,
                alignItems: 'center',
              },
              item: {
                ncss: {
                  w: 1,
                },
                action: {
                  ncss: {
                    ...primaryButtonStyle.ncss,
                    m: 1,
                    w: 1,
                  },
                  icon: {
                    ncss: {
                      ...iconButtonSmallStyle.ncss,
                    },
                  },
                },
              },
            },
          },
          themeButton: {
            ncss: {
              ...secondaryButtonStyle.ncss,
              m: 1,
            },
          },
        },
      },
    },
  },
}
