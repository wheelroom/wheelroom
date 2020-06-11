import { GridElementStyle } from '../../../elements/resets/grid-reset'
import { HeadingElementStyle } from '../../../elements/resets/heading-reset'
import { ImageElementStyle } from '../../../elements/image'
import { NcssProps } from '../../../types/wheel'
import { ParagraphElementStyle } from '../../../elements/resets/paragraph-reset'
import {
  TextWheelStyle,
  textPreset,
} from '../../../wheels/model/text/text-preset'
import { TopicWheelStyle } from '../../../wheels/model/topic/presets/topic-preset'
import { VideoElementStyle } from '../../../elements/video'

export interface BlogWheelStyle {
  container: GridElementStyle
  article: NcssProps
  header: {
    ncss: NcssProps
    categories: NcssProps
    date: NcssProps
    heading: HeadingElementStyle
    abstract: ParagraphElementStyle
  }
  media: {
    ncss: NcssProps
    image: ImageElementStyle
    video: VideoElementStyle
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
    abstract: {
      ncss: {
        label: 'blog-abstract',
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
