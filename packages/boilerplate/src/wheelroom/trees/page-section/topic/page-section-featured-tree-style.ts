import { defaultHeading2Style } from '../../../../element-styles/heading'
import { defaultParagraphStyle } from '../../../../element-styles/paragraph'
import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionFeaturedTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionFeaturedTreeStyle: PageSectionFeaturedTreeStyle = {
  container: {
    alignItems: ['center', 'baseline'],
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
  },
  topic: {
    content: {
      contentActions: {
        wrapper: {
          display: 'flex',
        },
      },
      contentText: {
        abstract: {
          ...defaultParagraphStyle,
          '&>tbody>tr>td': {
            p: [1, 2],
          },
        },
        heading: defaultHeading2Style,
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        w: [1, 1, 1 / 2.5],
      },
    },
    media: {
      image: {
        picture: {
          p: 3,
        },
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        mb: [3, 3, 0],
        w: [1, 1, 1 / 2.5],
      },
    },
    wrapper: {
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-evenly',
    },
  },
  wrapper: {
    bg: 'bg',
    py: [3, 6, 8],
  },
}
