import { BlogSectionListNcssTree } from '@wheelroom/wheel-blog'
import { DeepPartial } from '@wheelroom/core'
import { wrapperNcssNode } from '../grid-ncss'

export const blogSectionListNcssTree: DeepPartial<BlogSectionListNcssTree> = {
  container: {
    ncss: {
      label: 'blog-section-list-container',
      alignItems: ['center', 'initial'],
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
    },
  },
  blog: {
    ncss: {
      label: 'blog-section-list',
      display: 'flex',
      flexDirection: ['column', 'row'],
      m: 0,
      p: 0,
      w: 1,
    },
    item: {
      ncss: {
        label: 'list-item',
        listStyleType: 'none',
        maxWidth: '35em',
        mx: ['auto', 'initial'],
        p: 3,
        w: [1, 1 / 2, 1 / 3],
      },
    },
    link: {
      ncss: {
        label: 'list-link',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textDecoration: 'none',
      },
    },
    media: {
      ncss: {
        label: 'list-media',
      },
    },
    image: {
      picture: {
        ncss: {
          label: 'list-picture',
        },
      },
      ncss: {
        label: 'list-img',
        h: 1,
        objectFit: 'cover',
      },
    },
    video: {
      ncss: {
        label: 'list-video',
      },
      description: {
        ncss: {
          label: 'list-video-description',
        },
      },
    },
    content: {
      ncss: {
        label: 'list-content',
        flex: '1 1 auto',
        flexDirection: 'column',
        p: 3,
      },
    },
    text: {
      ncss: {
        label: 'list-text',
        flex: '1 1 auto',
      },
    },
    heading: {
      ncss: {
        label: 'list-heading',
        color: 'sectionText',
        mt: 3,
      },
    },
    abstract: {
      ncss: {
        label: 'list-abstract',
        color: 'sectionText',
      },
    },
    categories: {
      ncss: {
        label: 'list-categories',
        color: 'azure',
        fontFamily: 'text',
        fontSize: 4,
        textTransform: 'uppercase',
      },
    },
    date: {
      ncss: {
        label: 'list-date',
        color: 'bullet',
        flex: 0,
        fontFamily: 'text',
        fontSize: 3,
        mt: 1,
      },
    },
  },
  wrapper: wrapperNcssNode,
}
