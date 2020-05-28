import { GridElementStyle } from '../../element/resets/grid-reset'
import { TextWheelStyle, textPreset } from '../../model/text/text-preset'
import { NcssProps } from '../../types'
import { TopicWheelStyle } from '../../model/topic/presets/topic-preset'
import { HeadingElementStyle } from '../../element/resets/heading-reset'

export interface BlogWheelStyle {
  container: GridElementStyle
  article: NcssProps
  author: TopicWheelStyle
  date: NcssProps
  heading: HeadingElementStyle
  label: TopicWheelStyle
  text: TextWheelStyle
  featured: TopicWheelStyle
  wrapper: GridElementStyle
}

export const pageSectionBlogPreset: BlogWheelStyle = {
  container: {
    ncss: {},
  },
  article: {
    ncss: {
      label: 'blog-article',
      w: 1,
    },
  },
  author: {
    ncss: {
      label: 'blog-author',
    },
    content: {
      ncss: {},
      text: {
        ncss: {},
        heading: {
          ncss: {},
        },
        abstract: {
          ncss: {},
        },
        icon: {
          ncss: {},
        },
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
    },
    media: {
      ncss: {},
      embed: {
        ncss: {},
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
  label: {
    ncss: {
      label: 'blog-label',
    },
    content: {
      ncss: {},
      text: {
        ncss: {},
        heading: {
          ncss: {},
        },
        abstract: {
          ncss: {},
        },
        icon: {
          ncss: {},
        },
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
    },
    media: {
      ncss: {},
      embed: {
        ncss: {},
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
  featured: {
    ncss: {
      label: 'blog-featured',
    },
    content: {
      ncss: {},
      text: {
        ncss: {},
        heading: {
          ncss: {},
        },
        abstract: {
          ncss: {},
        },
        icon: {
          ncss: {},
        },
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
    },
    media: {
      ncss: {},
      embed: {
        ncss: {},
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
  wrapper: {
    ncss: {},
  },
}
