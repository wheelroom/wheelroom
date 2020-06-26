import { BlogSectionBlogModelNcssTree } from '../../../../../src-blog-wheel'
import { containerNcssNode, wrapperNcssNode } from '../../shared-ncss/grid-ncss'
import { deepMerge, DeepPartial } from '../../../../../src-core'
import { topicNcssTree } from '../topic/topic/topic-style'
import { textSectionTextNcssTree } from '../text/text-tree'

export const blogSectionBlogNcssTree: DeepPartial<BlogSectionBlogModelNcssTree> = {
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
        ncss: {
          label: 'blog-author',
          flexDirection: ['column', 'row'],
          w: 1,
        },
        content: {
          ncss: {
            flexDirection: 'column',
            p: 3,
          },
          actions: {
            ncss: {
              mt: 1,
            },
            link: {
              ncss: {
                display: 'inline-flex',
              },
              icon: {
                ncss: {
                  w: '16px',
                  h: '16px',
                  my: 'auto',
                  transform: 'translateX(4px)',
                },
              },
            },
          },
          text: {
            ncss: {},
            abstract: {
              ncss: {
                mb: 0,
              },
            },
            heading: {
              ncss: {
                fontWeight: 'bold',
                mb: 0,
              },
            },
            icon: {
              ncss: {},
            },
          },
        },
        media: {
          ncss: {
            flexDirection: 'column',
            p: 3,
          },
          embed: {
            ncss: {
              display: 'block',
              h: '0px',
              pb: '56.25%',
              position: 'relative',
              iframe: {
                position: 'absolute',
              },
            },
          },
          image: {
            ncss: {
              h: 1,
              objectFit: 'cover',
            },
            picture: {
              ncss: {
                overflow: 'hidden',
                h: ['60px', '80px'],
                w: ['60px', '80px'],
                borderRadius: '50%',
              },
            },
            figcaption: {
              ncss: {},
            },
          },
          mediaBreakpoint: {
            picture: {
              ncss: {
                overflow: 'hidden',
                h: ['60px', '80px'],
                w: ['60px', '80px'],
                borderRadius: '50%',
              },
            },
            ncss: {
              h: 1,
              objectFit: 'cover',
            },
          },
          video: {
            ncss: {},
            description: {
              ncss: {},
            },
          },
        },
      },
    ]),
    text: textSectionTextNcssTree.text,
  },
  wrapper: wrapperNcssNode,
}
