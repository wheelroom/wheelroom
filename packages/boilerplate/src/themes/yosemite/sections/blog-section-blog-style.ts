import { BlogWheelStyle } from '../../../wheelroom/models/blog-section/blog/blog-section-preset'
import { headingTextStyle } from '../elements/heading-style'
import { wrapperStyle } from '../elements/grid-style'

export const blogSectionBlogStyle: BlogWheelStyle = {
  container: {
    ncss: {},
  },
  article: {
    ncss: {},
  },
  header: {
    ncss: {
      py: 5,
      maxWidth: '712px',
      mx: 'auto',
    },
    categories: {
      ncss: {
        fontFamily: 'text',
        textTransform: 'uppercase',
        fontSize: 4,
        color: 'azure',
      },
    },
    date: {
      ncss: {
        fontFamily: 'text',
        color: 'bullet',
        mt: 1,
      },
    },
    heading: {
      ncss: {
        mt: 3,
      },
    },
    abstract: {
      ncss: {
        fontSize: 8,
      },
    },
  },
  media: {
    ncss: {},
    image: {
      picture: {
        ncss: {
          w: 1,
          mb: 6,
        },
      },
      img: {
        ncss: {},
      },
      figcaption: {
        ncss: {
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
    ncss: {},
  },
  author: {
    ncss: {},
    content: {
      ncss: {},
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
            mb: 0,
          },
        },
        icon: {
          ncss: {},
        },
      },
    },
    media: {
      ncss: {},
      embed: {
        ncss: {},
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
