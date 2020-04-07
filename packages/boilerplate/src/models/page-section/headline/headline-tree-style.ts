import { HeadlineTreeStyle } from '../../../core/trees/page-section/headline-tree'
import { defaultHeading1Style } from '../../../element-styles/heading'
import { paragraphHeroStyle } from '../../../element-styles/paragraph'

export const headlineTreeStyle: HeadlineTreeStyle = {
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    py: [3, 6, 8],
  },
  topic: {
    wrapper: {
      w: 1,
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
    content: {
      wrapper: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
      },
      contentText: {
        heading: defaultHeading1Style,
        abstract: { ...paragraphHeroStyle, color: 'text' },
      },
      contentActions: {
        wrapper: {
          mx: 'auto',
        },
        link: {
          mx: 2,
          fontSize: [5, 6],
          lineHeight: [3, 4],
        },
      },
    },
  },
}
