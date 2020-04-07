import { PageSectionHeroTreeStyle } from '../../../core/trees/page-section/page-section-hero-tree'
import { paragraphHeroStyle } from '../../../element-styles/paragraph'
import { buttonPrimaryStyle } from '../../../element-styles/button'

export const heroTreeStyle: PageSectionHeroTreeStyle = {
  wrapper: {
    label: 'wrapper',
  },
  container: {
    px: 0,
  },
  topic: {
    wrapper: {
      position: 'relative',
      px: [2, 5, 7],
      py: 9,
      w: 1,
    },
    media: {
      wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
      },
      image: {
        img: { h: 1, objectFit: 'cover' },
        picture: { h: '170px', w: 1 },
      },
    },
    content: {
      wrapper: {
        maxWidth: '1440px',
        m: 'auto',
        p: 3,
        w: 1,
      },
      contentText: {
        wrapper: {
          maxWidth: ['480px', '640px'],
          w: 1,
        },
        heading: { mb: 0, color: 'caviar' },
        abstract: paragraphHeroStyle,
      },
      contentActions: {
        wrapper: { mb: 0, maxWidth: '480px' },
        link: {
          ...buttonPrimaryStyle,
          fontSize: [5, 6],
          py: [2, 3],
          px: [3, 4],
        },
      },
    },
  },
}
