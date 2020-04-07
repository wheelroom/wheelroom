import { TopicTreeStyle } from '../../topic/topic-tree'
import { NcssProps } from '../../../elements/types'

export interface PageSectionBlockTreeStyle {
  topic: TopicTreeStyle
  wrapper: NcssProps
  container: NcssProps
}

export const pageSectionBlockTreeStyle: PageSectionBlockTreeStyle = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
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
    wrapper: { px: [0, 3], py: [3, 3], w: [1, 1 / 2, 1 / 3] },
    media: {
      image: {
        img: {
          w: 1,
          h: 1,
          objectFit: 'cover',
          position: 'absolute',
        },
        picture: {
          display: 'block',
          h: '0px',
          position: 'relative',
          pb: '65.25%',
        },
      },
      video: {
        video: {
          my: [0, 0],
        },
      },
    },
    content: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
      },
      contentText: {
        wrapper: {
          display: 'block',
          flex: '1 1 auto',
        },
      },
    },
  },
}
