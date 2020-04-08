import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionHeroTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionHeroTreeStyle: PageSectionHeroTreeStyle = {
  container: {},
  topic: {
    content: {
      contentActions: {
        link: {},
        wrapper: {},
      },
      contentText: {
        abstract: {},
        heading: {},
        wrapper: {},
      },
      wrapper: {},
    },
    media: {
      image: {
        img: {
          h: 1,
          objectFit: 'cover',
        },
        picture: {
          h: 'auto',
          w: 1,
        },
      },
      wrapper: {
        bottom: '0',
        left: '0',
        position: 'absolute',
        right: '0',
        top: '0',
        zIndex: -1,
      },
    },
    wrapper: {
      position: 'relative',
      w: 1,
    },
  },
  wrapper: {},
}
