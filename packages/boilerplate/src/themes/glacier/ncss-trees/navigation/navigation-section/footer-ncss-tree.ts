import { NavigationSectionFooterNcssTree } from '@wheelroom/wheel-navigation'
import { deepMerge, DeepPartial } from '@wheelroom/core'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { navigationSegmentNcssTree } from '../navigation-segment/navigation-segment-ncss-tree'
import { iconButtonSmallNcssNode } from '../../icon-ncss'

export const navigationSectionFooterNcssTree: DeepPartial<NavigationSectionFooterNcssTree> = {
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        label: 'navigation-footer',
        borderTop: '1px solid transparent',
        borderColor: 'sectionBorder',
        py: 0,
      },
    },
  ]),
  footerBrand: {
    ncss: {
      label: 'footer-brand',
    },
    container: deepMerge([
      containerNcssNode,
      {
        ncss: {
          label: 'footer-brand-container',
          pt: 5,
          justifyContent: 'center',
        },
      },
    ]),
    brandNavigation: {
      segment: {
        ncss: {
          label: 'brand-navigation-segment',
          display: 'inline-flex',
          mr: 3,
        },
        branding: {
          ncss: {
            label: 'brand-navigation-segment-brand',
            fontFamily: 'branding',
            fontWeight: 'bold',
            color: 'sectionText',
          },
        },
        action: {
          ncss: {
            label: 'brand-navigation-segment-action',
            display: 'inline-flex',
            fontFamily: 'branding',
            fontWeight: 'bold',
            fontSize: 'xx-large',
            textDecoration: 'none',
            color: 'sectionText',
            ':focus': {
              outlineColor: 'outline',
            },
          },
          icon: iconButtonSmallNcssNode,
        },
      },
    },
  },
  footerCard: {
    ncss: {
      label: 'footer-card',
    },
    container: deepMerge([
      containerNcssNode,
      {
        ncss: {
          label: 'footer-card-container',
          pt: 5,
          justifyContent: 'center',
        },
      },
    ]),

    cardNavigation: {
      ncss: {
        justifyContent: 'space-evenly',
        label: 'card-navigation',
        w: 1,
      },
      segment: deepMerge([
        navigationSegmentNcssTree,
        {
          ncss: {
            flexDirection: 'column',
          },
          list: {
            ncss: {
              textAlign: 'center',
            },
          },
          action: {
            ncss: {
              textDecoration: 'none',
              px: 2,
              py: 3,
              ':hover, &.active': {
                textDecoration: 'underline',
              },
            },
          },
        },
      ]),
    },
  },
  footerMenu: {
    ncss: {
      label: 'footer-menu',
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      justifyContent: ['space-between'],
      mx: 'auto',
      w: 1,
    },
    container: deepMerge([
      containerNcssNode,
      {
        ncss: {
          label: 'footer-menu-container',
          minHeight: '84px',
          px: 2,
        },
      },
    ]),
    menuNavigation: {
      ncss: {
        label: 'menu-navigation',
      },
      segment: deepMerge([
        navigationSegmentNcssTree,
        {
          list: {
            ncss: {
              textAlign: 'center',
            },
          },
          action: {
            ncss: {
              textDecoration: 'none',
              px: 2,
              py: 3,
              ':hover, &.active': {
                textDecoration: 'underline',
              },
            },
          },
        },
      ]),
    },
    socialNavigation: {
      ncss: {
        label: 'social-navigation',
      },
      segment: deepMerge([
        navigationSegmentNcssTree,
        {
          list: {
            ncss: {
              textAlign: 'center',
            },
          },
          action: {
            ncss: {
              px: 2,
              py: 3,
              ':hover': {
                color: 'sectionText',
              },
            },
          },
        },
      ]),
    },
  },
  footerLegal: {
    ncss: {
      label: 'footer-legal',
    },
    container: deepMerge([
      containerNcssNode,
      {
        ncss: {
          label: 'footer-legal-container',
          borderTop: '1px solid transparent',
          borderColor: 'sectionBorder',
          minHeight: '48px',
          px: 3,
        },
      },
    ]),
    legalNavigation: {
      ncss: {
        label: 'legal-navigation',
        alignItems: 'center',
        flexDirection: ['column', 'row'],
        fontSize: 4,
        justifyContent: ['center', 'space-between'],
        w: 1,
      },
      copyright: {
        ncss: {
          label: 'copyright',
          fontFamily: 'text',
          textAlign: ['center'],
          mb: [2, 0],
        },
      },
      promise: {
        ncss: {
          label: 'promise',
          // On iPhone this link will not be visible without the extra margin-bottom
          mb: [4, 0],
        },
        link: {
          ncss: {
            label: 'promise-link',
            display: 'inline-flex',
            color: 'sectionText',
            textDecoration: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
          },
        },
        sup: {
          ncss: {
            label: 'promise-sup',
            color: 'metal',
          },
        },
      },
    },
  },
}
