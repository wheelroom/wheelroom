import { GridElementStyle } from '../../../element/resets/grid-reset'
import { TextWheelStyle, textPreset } from '../../../model/text/text-preset'
import { NcssProps } from '../../../types'
import { TopicWheelStyle } from '../../../model/topic/presets/topic-preset'
import { HeadingElementStyle } from '../../../element/resets/heading-reset'

export interface BlogWheelStyle {
  container: GridElementStyle
  article: NcssProps
  header: {
    ncss: NcssProps
    categories: NcssProps
    date: NcssProps
    heading: HeadingElementStyle
  }
  text: TextWheelStyle
  authors: NcssProps
  author: TopicWheelStyle
  wrapper: GridElementStyle
}

export const blogSectionPreset: BlogWheelStyle = {
  container: {
    ncss: {},
  },
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
    },
    categories: {
      ncss: {
        label: 'blog-categories',
      },
    },
    date: {
      ncss: {
        label: 'blog-date',
      },
    },
    heading: {
      ncss: {
        label: 'blog-heading',
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
        ncss: {},
        link: {
          ncss: {},
          icon: {
            ncss: {},
          },
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {},
        },
        heading: {
          ncss: {
            fontWeight: 'bold',
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
          ncss: {},
        },
        picture: {
          ncss: {},
        },
        figcaption: {
          ncss: {},
        },
      },
      mediaBreakpoint: {
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
        description: {
          ncss: {},
        },
      },
    },
  },
  text: textPreset,
  wrapper: {
    ncss: {},
  },
}
