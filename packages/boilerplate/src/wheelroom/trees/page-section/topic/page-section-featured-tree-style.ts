import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionFeaturedTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionFeaturedTreeStyle: PageSectionFeaturedTreeStyle = {
  container: {
    ncss: {
      alignItems: ['center', 'baseline'],
      flexDirection: ['column', 'row'],
      justifyContent: 'center',
    },
  },
  topic: {
    ncss: {
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-evenly',
    },
    content: {
      ncss: {
        flexDirection: 'column',
        w: [1, 1, 1 / 2],
      },
      actions: {
        ncss: {},
        link: {
          ncss: {},
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {},
        },
        heading: {
          ncss: {},
        },
      },
    },
    media: {
      ncss: {
        flexDirection: 'column',
        mb: [3, 3, 0],
        w: [1, 1, 1 / 2.5],
      },
      image: {
        img: {
          ncss: {},
        },
        picture: {
          ncss: {
            p: 3,
          },
        },
        figcaption: {
          ncss: {},
        },
      },
      video: {
        video: {
          ncss: {},
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: {
    ncss: {
      label: 'wrapper',
    },
  },
}
