import { NavigationSectionSitemapNcssTree } from '@wheelroom/wheel-navigation'
import { deepMerge, DeepPartial } from '@wheelroom/core'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { navigationSegmentNcssTree } from '../navigation-segment/navigation-segment-ncss-tree'

export const navigationSectionSitemapNcssTree: DeepPartial<NavigationSectionSitemapNcssTree> = {
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        borderTop: '1px solid transparent',
        borderColor: 'sectionBorder',
      },
    },
  ]),
  container: containerNcssNode,
  sitemap: {
    ncss: {
      label: 'navigation-segments',
      alignItems: 'center',
      fontSize: 4,
      mx: 'auto',
      w: 1,
    },
    menu: {
      ncss: {
        label: 'sitemap-navigation',
        flexDirection: 'row',
        flexWrap: 'wrap',
        w: 1,
      },
      segment: deepMerge([
        navigationSegmentNcssTree,
        {
          ncss: {
            display: 'block',
            p: 3,
            w: [1 / 2, 1 / 4],
          },
          heading: {
            ncss: {
              fontSize: 4,
              m: 0,
              mb: 2,
              textTransform: 'uppercase',
            },
          },
          list: {
            ncss: {
              flexDirection: 'column',
            },
          },
          item: {
            ncss: {
              display: 'block',
            },
          },
          action: {
            ncss: {
              py: 2,
              textDecoration: 'none',
              ':hover, &.active': {
                textDecoration: 'underline',
              },
            },
          },
        },
      ]),
    },
  },
}
