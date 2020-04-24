import { wrapperStyle } from '../elements/grid-style'

import { NavFooterWheelStyle } from '../../../wheelroom/wheels/section/navigation-footer/presets/nav-footer-preset'

export const navFooterStyle: NavFooterWheelStyle = {
  wrapper: {
    ncss: {
      ...wrapperStyle.ncss,
      borderColor: 'sectionBorder',
    },
  },
  container: {
    ncss: {},
  },
  navFooter: {
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
    socialList: {
      ncss: {},
      listItem: {
        ncss: {},
        link: {
          ncss: {},
          icon: {
            ncss: {
              ':hover': {
                color: 'sectionText',
              },
            },
          },
        },
      },
    },
  },
  legal: {
    ncss: {
      borderColor: 'sectionBorder',
    },
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
}
