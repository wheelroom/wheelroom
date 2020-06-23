import { NavigationFooterWheelStyle } from '../../../../../../src-navigation-wheel'
import { wrapperStyle } from '../../shared-styles/grid-style'

export const navigationSectionFooterStyle: NavigationFooterWheelStyle = {
  wrapper: {
    ncss: {
      ...wrapperStyle.ncss,
      borderTop: '1px solid transparent',
      borderColor: 'sectionBorder',
      py: 0,
    },
  },
  container: {
    ncss: {
      minHeight: '84px',
      px: 2,
    },
  },
  section: {
    ncss: {
      label: 'navigation-segments',
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      justifyContent: ['space-between'],
      mx: 'auto',
      w: 1,
    },
    menu: {
      ncss: {
        label: 'menu-navigation',
      },
      segment: {
        ncss: {},
        heading: {
          ncss: {},
        },
        list: {
          ncss: {
            textAlign: 'center',
          },
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
    social: {
      ncss: {
        label: 'social-navigation',
      },
      segment: {
        ncss: {},
        heading: {
          ncss: {},
        },
        list: {
          ncss: {
            textAlign: 'center',
          },
          item: {
            ncss: {},
            action: {
              ncss: {
                px: 2,
                py: 3,
                ':hover': {
                  color: 'sectionText',
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
