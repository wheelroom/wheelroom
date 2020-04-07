import { CardTreeStyle } from '../../../core/model-views/page-section/card-tree'

export const cardTreeStyle: CardTreeStyle = {
  conditional: {
    topicWrapperShadow: {
      border: '1px solid',
      borderColor: 'cardsBorder',
      borderRadius: 3,
      boxShadow: '0 0 16px',
      transition: 'transform .25s ease',
      ':hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)',
      },
    },
  },
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
    px: [2, 5, 7],
    w: 1,
  },
  topic: {
    wrapper: {
      bg: 'bg',
      color: 'cardsShadow',
      flex: '1',
      maxWidth: '280px',
      minWidth: '280px',
      m: 2,
    },
    media: {
      wrapper: {
        p: 3,
      },
      image: {
        img: { h: 1, objectFit: 'cover' },
        picture: {
          display: 'block',
          h: '178px',
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
      contentActions: {
        wrapper: {
          flex: '0',
        },
      },
    },
  },
}
