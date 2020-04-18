import { NavHeaderPreset } from '../../../wheelroom/wheels/page-section/navigation-header/presets/nav-header-preset'
import { wrapperStyle } from '../styles/grid-style'
import {
  elementAsPrimaryButtonStyle,
  secondaryButtonStyle,
} from '../styles/button-style'

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
            ncss: {},
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
            ncss: {},
          },
          themeButton: {
            ncss: {},
          },
        },
      },
    },
  },
}
