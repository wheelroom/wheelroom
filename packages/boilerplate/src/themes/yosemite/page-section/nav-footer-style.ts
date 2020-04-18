import { NavFooterPreset } from '../../../wheelroom/wheels/page-section/navigation-footer/presets/nav-footer-preset'
import { wrapperStyle } from '../styles/grid-style'

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
        ncss: {},
      },
      sup: {
        ncss: {},
      },
    },
  },
}
