import { NavFooterPreset } from '../../../wheelroom/wheels/page-section/navigation-footer/presets/nav-footer-preset'
import { wrapperStyle } from '../elements/grid-style'

export const navFooterStyle: NavFooterPreset = {
  wrapper: {
    ncss: {
      ...wrapperStyle,
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
            ncss: {},
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
          color: 'bullet',
        },
      },
    },
  },
}
