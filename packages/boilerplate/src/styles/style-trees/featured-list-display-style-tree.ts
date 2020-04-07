import { FeaturedListTreeStyle } from '../../core/model-views/page-section/featured-list-tree'

export const featuredListDisplayStyleTree: FeaturedListTreeStyle = {
  conditional: {
    containerHideMedia: {
      yes: ['column', 'row'],
      no: ['column'],
    },
    topicWrapperHideMedia: {
      yes: {
        flexDirection: ['column', 'row'],
        w: [1, 1 / 2, 1 / 3],
      },
      no: {
        flexDirection: ['column', 'row'],
        w: 1,
      },
    },
  },
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  container: {},
  topic: {
    wrapper: {},
    media: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'normal',
        w: [1 / 3, 1 / 4, 1 / 4],
        p: 3,
      },
    },
    content: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        w: [1, 2 / 3, 3 / 4],
        p: 3,
      },
      contentActions: {
        wrapper: {
          display: 'flex',
        },
      },
    },
  },
}
