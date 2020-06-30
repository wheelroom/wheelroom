import { NavigationSectionFooterNcssTree } from '@wheelroom/wheel-navigation'
import { deepMerge, DeepPartial } from '@wheelroom/core'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { navigationSegmentNcssTree } from '../navigation-segment/navigation-segment-ncss-tree'

export const navigationSectionFooterNcssTree: DeepPartial<NavigationSectionFooterNcssTree> = {
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        borderTop: '1px solid transparent',
        borderColor: 'sectionBorder',
        py: 0,
      },
    },
  ]),
  container: deepMerge([
    containerNcssNode,
    {
      ncss: {
        minHeight: '84px',
        px: 2,
      },
    },
  ]),
  footer: {
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
    social: {
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
  legalFooter: {
    wrapper: deepMerge([
      wrapperNcssNode,
      {
        ncss: {
          borderTop: '1px solid transparent',
          borderColor: 'sectionBorder',
          minHeight: '48px',
        },
      },
    ]),
    container: {
      ncss: {
        px: 3,
      },
    },
    legal: {
      ncss: {
        label: 'legal',
        alignItems: 'center',
        justifyContent: ['center', 'flex-end'],
        w: 1,
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
