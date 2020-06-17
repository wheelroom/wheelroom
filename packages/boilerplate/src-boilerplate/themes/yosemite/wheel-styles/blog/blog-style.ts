import { BlogWheelStyle } from '../../../../../wheelroom'
import { headingTextStyle } from '../elements/heading-style'
import { containerStyle, wrapperStyle } from '../elements/grid-style'

export const blogSectionBlogStyle: BlogWheelStyle = {
  container: containerStyle,
  article: {
    ncss: {
      label: 'blog-article',
      w: 1,
    },
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
  },
  media: {
    ncss: {
      label: 'blog-media',
    },
    image: {
      picture: {
        ncss: {
          label: 'blog-picture',
          w: 1,
          mb: 6,
        },
      },
      img: {
        ncss: {
          label: 'blog-img',
        },
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
      video: {
        ncss: {},
      },
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
  author: {
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
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
          },
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
        img: {
          ncss: {
            h: 1,
            objectFit: 'cover',
          },
        },
      },
      video: {
        video: {
          ncss: {},
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  text: {
    h1: headingTextStyle,
    h2: headingTextStyle,
    h3: headingTextStyle,
    h4: headingTextStyle,
    h5: headingTextStyle,
    h6: headingTextStyle,
    ul: {
      ncss: {
        mt: 0,
      },
    },
    ol: {
      ncss: {
        mt: 0,
      },
    },
    li: {
      ncss: {
        '> p': {
          mb: 2,
        },
      },
    },
    entryHyperlink: {
      ncss: {},
    },
    inlinesHyperlink: {
      ncss: {},
    },
    hr: {
      ncss: {},
    },
    embed: {
      ncss: {
        mt: 3,
        mb: 5,
        position: 'relative',
        h: '0px',
        pb: '56.25%',
        iframe: {
          position: 'absolute',
          h: 1,
          w: 1,
        },
      },
    },
    blockquote: {
      ncss: {},
    },
    p: {
      ncss: {},
    },
    strong: {
      ncss: {},
    },
    code: {
      ncss: {},
    },
    pre: {
      ncss: {},
    },
    image: {
      img: {
        ncss: {},
      },
      picture: {
        ncss: {
          mt: 3,
          mb: 5,
        },
      },
      figcaption: {
        ncss: {},
      },
    },
    video: {
      video: {
        ncss: {
          mt: 3,
          mb: 5,
        },
      },
      description: {
        ncss: {},
      },
    },
    wrapper: {
      ncss: {},
    },
  },
  wrapper: wrapperStyle,
}
