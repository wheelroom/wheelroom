import { BlogListWheelStyle } from '../../../wheelroom'
import { wrapperStyle } from '../elements/grid-style'

export const blogSectionListStyle: BlogListWheelStyle = {
  container: {
    ncss: {
      label: 'blog-list-container',
      alignItems: ['center', 'initial'],
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
    },
  },
  blog: {
    ncss: {
      label: 'blog-list',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '35em',
      p: 3,
      textDecoration: 'none',
      w: ['auto', 1 / 2, 1 / 3],
    },
    media: {
      ncss: {
        label: 'blog-list-media',
      },
      image: {
        picture: {
          ncss: {
            label: 'blog-list-picture',
          },
        },
        img: {
          ncss: {
            label: 'blog-list-img',
          },
        },
      },
      video: {
        video: {
          ncss: {
            label: 'blog-list-video',
          },
        },
      },
    },
    content: {
      ncss: {
        label: 'blog-list-content',
        flex: 1,
        flexDirection: 'column',
        p: 3,
      },
      text: {
        ncss: {
          label: 'blog-list-text',
          flex: 1,
        },
        heading: {
          ncss: {
            label: 'blog-list-heading',
            color: 'sectionText',
            mt: 3,
          },
        },
        abstract: {
          ncss: {
            label: 'blog-list-abstract',
            color: 'sectionText',
          },
        },
      },
      categories: {
        ncss: {
          label: 'blog-list-categories',
          color: 'azure',
          fontFamily: 'text',
          fontSize: 4,
          order: -1,
          textTransform: 'uppercase',
        },
      },
      date: {
        ncss: {
          label: 'blog-list-date',
          color: 'bullet',
          fontFamily: 'text',
          fontSize: 3,
          mt: 1,
        },
      },
    },
  },
  wrapper: wrapperStyle,
}
