import { NavHeaderPreset } from '../../../wheelroom/wheels/page-section/navigation-header/presets/nav-header-preset'
import { wrapperStyle } from '../elements/grid-style'
import {
  elementAsPrimaryButtonStyle,
  secondaryButtonStyle,
} from '../elements/button-style'

export const navHeaderStyle: NavHeaderPreset = {
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
      ncss: {},
    },
    sup: {
      ncss: {},
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
      action: {
        ncss: {
          ...elementAsPrimaryButtonStyle,
        },
      },
      themeButton: {
        ncss: {
          ...secondaryButtonStyle,
        },
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
            bg: 'sectionBg',
            color: 'sectionText',
            borderColor: 'sectionBorder',
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
          ncss: {},
          action: {
            ncss: {
              ...elementAsPrimaryButtonStyle,
              mb: 2,
            },
          },
          themeButton: {
            ncss: {
              ...secondaryButtonStyle,
            },
          },
        },
      },
    },
  },
}
