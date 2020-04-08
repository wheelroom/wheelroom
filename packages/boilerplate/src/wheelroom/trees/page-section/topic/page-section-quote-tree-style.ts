import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionQuoteTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionQuoteTreeStyle: PageSectionQuoteTreeStyle = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topic: {
    content: {
      contentActions: {
        wrapper: {
          mx: 'auto',
        },
      },
      contentText: {
        abstract: {
          fontSize: [7, 8, 9],
          fontStyle: 'italic',
          mx: [0, 5],
          my: [5],
        },
        heading: {
          ':before': {
            content: '"— "',
          },
          my: 3,
          order: 1,
        },
        wrapper: {
          textAlign: 'center',
        },
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      },
    },
    media: {
      image: {
        img: {
          h: 1,
          objectFit: 'cover',
          position: 'absolute',
          w: 1,
        },
        picture: {
          borderRadius: '50%',
          display: 'block',
          h: '178px',
          mx: 'auto',
          overflow: 'hidden',
          position: 'relative',
          w: '178px',
        },
      },
      wrapper: {
        p: 3,
      },
    },
    wrapper: {
      alignItems: 'center',
    },
  },
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
}
