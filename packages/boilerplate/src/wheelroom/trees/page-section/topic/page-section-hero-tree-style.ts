import { paragraphHeroStyle } from '../../../../element-styles/paragraph'
import { buttonPrimaryStyle } from '../../../../element-styles/button'
import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionHeroTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionHeroTreeStyle: PageSectionHeroTreeStyle = {
  container: {
    px: 0,
  },
  topic: {
    content: {
      contentActions: {
        link: {
          ...buttonPrimaryStyle,
          fontSize: [5, 6],
          px: [3, 4],
          py: [2, 3],
        },
        wrapper: {
          maxWidth: '480px',
          mb: 0,
        },
      },
      contentText: {
        abstract: paragraphHeroStyle,
        heading: {
          color: 'caviar',
          mb: 0,
        },
        wrapper: {
          maxWidth: ['480px', '640px'],
          w: 1,
        },
      },
      wrapper: {
        m: 'auto',
        maxWidth: '1440px',
        p: 3,
        w: 1,
      },
    },
    media: {
      image: {
        img: {
          h: 1,
          objectFit: 'cover',
        },
        picture: {
          h: '170px',
          w: 1,
        },
      },
      wrapper: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: -1,
      },
    },
    wrapper: {
      position: 'relative',
      px: [2, 5, 7],
      py: 9,
      w: 1,
    },
  },
  wrapper: {},
}
