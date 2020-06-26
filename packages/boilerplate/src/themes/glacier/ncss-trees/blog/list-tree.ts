import { wrapperNcssNode } from '../grid-ncss'
import { BlogSectionListModelNcssTree } from '../../../../../src-blog-wheel'
import { DeepPartial } from '../../../../../src-core'

export const blogSectionListNcssTree: DeepPartial<BlogSectionListModelNcssTree> = {
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
      flexDirection: ['column', 'row'],
      display: 'flex',
      p: 0,
      m: 0,
      w: 1,
    },
    item: {
      ncss: {
        label: 'list-item',
        listStyleType: 'none',
        maxWidth: '35em',
        p: 3,
        w: [1, 1 / 2, 1 / 3],
        mx: ['auto', 'initial'],
      },
    },
    link: {
      ncss: {
        label: 'list-link',
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
        flex: 1,
        flexDirection: 'column',
        p: 3,
      },
    },
    text: {
      ncss: {
        label: 'list-text',
        flex: 1,
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
        order: -1,
        textTransform: 'uppercase',
      },
    },
    date: {
      ncss: {
        label: 'list-date',
        color: 'bullet',
        fontFamily: 'text',
        fontSize: 3,
        mt: 1,
      },
    },
  },
  wrapper: wrapperNcssNode,
}
