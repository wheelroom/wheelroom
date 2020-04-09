import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionBlockTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionBlockTreeStyle: PageSectionBlockTreeStyle = {
  container: {
    ncss: {
      alignItems: ['center', 'initial'],
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  topic: {
    ncss: {},
    content: {
      ncss: {},
      text: {
        heading: {
          ncss: {},
        },
        abstract: {
          ncss: {},
        },
      },
    },
    media: {
      ncss: {},
      image: {
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
            position: 'absolute',
            w: 1,
          },
        },
        picture: {
          ncss: {
            display: 'block',
            h: '0px',
            pb: '65.25%',
            position: 'relative',
          },
        },
        figcaption: {
          ncss: {},
        },
      },
      video: {
        video: {
          ncss: {
            my: [0, 0],
          },
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
