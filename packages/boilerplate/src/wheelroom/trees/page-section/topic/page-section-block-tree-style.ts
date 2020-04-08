import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionBlockTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionBlockTreeStyle: PageSectionBlockTreeStyle = {
  container: {
    alignItems: ['center', 'initial'],
    flexDirection: ['column', 'row'],
    flexWrap: 'wrap',
    justifyContent: 'center',
    m: 'auto',
    p: 0,
    w: 1,
  },
  topic: {
    content: {
      contentText: {
        wrapper: {
          display: 'block',
          flex: '1 1 auto',
        },
      },
      wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
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
          display: 'block',
          h: '0px',
          pb: '65.25%',
          position: 'relative',
        },
      },
      video: {
        video: {
          my: [0, 0],
        },
      },
    },
    wrapper: {
      px: [0, 3],
      py: [3, 3],
      w: [1, 1 / 2, 1 / 3],
    },
  },
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
}
