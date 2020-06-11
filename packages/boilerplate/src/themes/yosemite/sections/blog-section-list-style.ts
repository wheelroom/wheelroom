import { BlogListWheelStyle } from '../../../wheelroom/models/blog-section/list/blog-section-list-preset'
import { wrapperStyle } from '../elements/grid-style'

export const blogSectionListStyle: BlogListWheelStyle = {
  container: {
    ncss: {
      alignItems: ['center', 'initial'],
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
    },
  },
  blog: {
    ncss: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '35em',
    },
    media: {
      ncss: {},
      image: {
        picture: {
          ncss: {},
        },
        img: {
          ncss: {},
        },
      },
      video: {
        video: {
          ncss: {},
        },
      },
    },
    content: {
      ncss: {
        flexDirection: 'column',
        flex: 1,
      },
      text: {
        ncss: {
          flex: 1,
        },
        heading: {
          ncss: {
            mt: 3,
            color: 'sectionText',
          },
        },
        abstract: {
          ncss: {
            color: 'sectionText',
          },
        },
      },
      categories: {
        ncss: {
          fontFamily: 'text',
          textTransform: 'uppercase',
          fontSize: 4,
          color: 'azure',
          order: -1,
        },
      },
      date: {
        ncss: {
          fontFamily: 'text',
          color: 'bullet',
          fontSize: 3,
          mt: 1,
        },
      },
    },
  },
  wrapper: wrapperStyle,
}
