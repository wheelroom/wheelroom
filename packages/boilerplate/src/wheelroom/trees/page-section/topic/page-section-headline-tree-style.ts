import { defaultHeading1Style } from '../../../../element-styles/heading'
import { paragraphHeroStyle } from '../../../../element-styles/paragraph'
import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionHeadlineTreeStyle {
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionHeadlineTreeStyle: PageSectionHeadlineTreeStyle = {
  topic: {
    content: {
      contentActions: {
        link: {
          fontSize: [5, 6],
          lineHeight: [3, 4],
          mx: 2,
        },
        wrapper: {
          mx: 'auto',
        },
      },
      contentText: {
        abstract: { ...paragraphHeroStyle, color: 'text' },
        heading: defaultHeading1Style,
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      },
    },
    media: {
      image: {
        picture: {
          display: 'block',
          px: 0,
          py: 3,
        },
      },
    },
    wrapper: {
      w: 1,
    },
  },
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
}
