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
          ncss: {
            ':focus': {
              outlineColor: 'outline',
            },
          },
        },
      },
    },
    socialList: {
      ncss: {},
      listItem: {
        ncss: {},
        link: {
          ncss: {
            ':focus > svg': {
              outlineColor: 'outline',
              color: 'iconColorState',
            },
            ':hover > svg': {
              color: 'iconColorState',
            },
          },
          icon: {
            ncss: {},
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
