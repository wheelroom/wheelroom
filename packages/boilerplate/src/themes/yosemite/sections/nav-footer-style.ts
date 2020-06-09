import { wrapperStyle } from '../elements/grid-style'

import { NavigationFooterWheelStyle } from '../../../wheelroom/wheels/section/navigation-footer/presets/navigation-footer-preset'

export const navFooterStyle: NavigationFooterWheelStyle = {
  wrapper: {
    ncss: {
      ...wrapperStyle.ncss,
      borderColor: 'sectionBorder',
    },
  },
  container: {
    ncss: {},
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
    social: {
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
  },
  legalFooter: {
    wrapper: {
      ncss: {
        ...wrapperStyle.ncss,
        borderColor: 'sectionBorder',
      },
    },
    container: {
      ncss: {},
    },
    legal: {
      ncss: {},
      promise: {
        ncss: {},
        link: {
          ncss: {
            color: 'sectionText',
            textDecoration: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
          },
        },
        sup: {
          ncss: {
            color: 'metal',
          },
        },
      },
    },
  },
}
