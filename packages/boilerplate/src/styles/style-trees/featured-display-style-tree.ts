import { FeaturedDisplayStyleTree } from '../../core/page-section-views/featured-display'
import { defaultHeading2Style } from '../core-elements/heading'

export const featuredDisplayStyleTree: FeaturedDisplayStyleTree = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {
    justifyContent: 'center',
    flexDirection: ['column', 'row'],
    alignItems: ['center', 'baseline'],
  },
  topic: {
    wrapper: {
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-evenly',
    },
    media: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        w: [1, 1, 1 / 2.5],
        mb: [3, 3, 0],
      },
      image: {
        picture: {
          p: 3,
        },
      },
    },
    content: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        w: [1, 1, 1 / 2.5],
      },
      contentText: {
        heading: defaultHeading2Style,
        table: {
          '&>tbody>tr': {
            bg: 'skyblue',
          },
          '&>tbody>tr>td': {
            p: [2, 3, 4, 5],
          },
        },
      },
      contentActions: {
        wrapper: {
          display: 'flex',
        },
      },
    },
  },
}
