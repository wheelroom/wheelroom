import { BlogSectionBlogNcssTree } from '@wheelroom/wheel-blog'
import { deepMerge, DeepPartial } from '@wheelroom/core'
import { containerNcssNode, wrapperNcssNode } from '../grid-ncss'
import { topicNcssTree } from '../topic/topic/topic-ncss-tree'
import { textSectionTextNcssTree } from '../text/text-ncss-tree'
import { embedNcssNode } from '../embed-ncss'
import { iconSmallNcss } from '../icon-ncss'

export const blogSectionBlogNcssTree: DeepPartial<BlogSectionBlogNcssTree> = {
  container: containerNcssNode,
  blog: {
    ncss: {
      label: 'blog-section-blog',
      w: 1,
    },
    header: {
      ncss: {
        label: 'blog-header',
        flexDirection: 'column',
        px: 3,
        py: 5,
        maxWidth: '712px',
        mx: 'auto',
      },
    },
    categories: {
      ncss: {
        label: 'blog-categories',
        fontFamily: 'text',
        textTransform: 'uppercase',
        fontSize: 4,
        color: 'azure',
      },
    },
    date: {
      ncss: {
        label: 'blog-date',
        fontFamily: 'text',
        color: 'bullet',
        mt: 1,
      },
    },
    heading: {
      ncss: {
        label: 'blog-heading',
        mt: 3,
      },
    },
    abstract: {
      ncss: {
        label: 'blog-abstract',
        fontSize: 8,
      },
    },
    media: {
      ncss: {
        label: 'blog-media',
      },
    },
    image: {
      picture: {
        ncss: {
          label: 'blog-picture',
          w: 1,
          mb: 6,
        },
      },
      ncss: {
        label: 'blog-img',
      },
      figcaption: {
        ncss: {
          label: 'blog-figcaption',
          color: 'bullet',
          fontSize: 4,
          p: 3,
          pb: 0,
        },
      },
    },
    video: {
      ncss: {},
      description: {
        ncss: {},
      },
    },
    authors: {
      ncss: {
        label: 'blog-authors',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '712px',
        mx: 'auto',
        py: 4,
      },
    },
    author: deepMerge([
      topicNcssTree,
      {
        ncssSwitch: {
          container: {
            label: 'blog-author',
            flexDirection: ['column', 'row'],
            w: 1,
          },
        },
        content: {
          ncss: {
            label: 'blog-author-content',
            flexDirection: 'column',
            p: 3,
          },
        },
        actionGroup: {
          ncss: {
            label: 'blog-author-action-group',
            mt: 1,
          },
        },
        action: {
          ncss: {
            label: 'blog-author-action',
            display: 'inline-flex',
          },
        },
        icon: iconSmallNcss,
        abstract: {
          label: 'blog-author-abstract',
          ncss: {
            mb: 0,
          },
        },
        heading: {
          ncss: {
            label: 'blog-author-heading',
            fontWeight: 'bold',
            mb: 0,
          },
        },
        media: {
          ncss: {
            label: 'blog-author-media',
            flexDirection: 'column',
            p: 3,
          },
        },
        embed: embedNcssNode,
        image: {
          ncss: {
            label: 'blog-author-image',
            h: 1,
            objectFit: 'cover',
          },
          picture: {
            ncss: {
              label: 'blog-author-picture',
              overflow: 'hidden',
              h: ['60px', '80px'],
              w: ['60px', '80px'],
              borderRadius: '50%',
            },
          },
        },
        mediaBreakpoint: {
          ncss: {
            label: 'blog-author-media-breakpoint',
            h: 1,
            objectFit: 'cover',
          },
          picture: {
            ncss: {
              label: 'blog-author-media-breakpoint-picture',
              overflow: 'hidden',
              h: ['60px', '80px'],
              w: ['60px', '80px'],
              borderRadius: '50%',
            },
          },
        },
      },
    ]),
    richText: textSectionTextNcssTree.richText,
  },
  wrapper: wrapperNcssNode,
}
