import {
  GridElementStyle,
  HeadingElementStyle,
  ImageElementStyle,
  NcssProps,
  ParagraphElementStyle,
  VideoElementStyle,
} from '../../../../src-core'
import {
  TextWheelStyle,
  textPreset,
} from '../../../../src-text-wheel/models/text/text-preset'
import { TopicWheelStyle } from '../../../../src-topic-wheel/models/topic/presets/topic-preset'

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
    ncss: {},
  },
  header: {
    ncss: {},
    categories: {
      ncss: {},
    },
    date: {
      ncss: {},
    },
    heading: {
      ncss: {},
    },
    abstract: {
      ncss: {},
    },
  },
  media: {
    ncss: {},
    image: {
      picture: {
        ncss: {},
      },
      img: {
        ncss: {},
      },
      figcaption: {
        ncss: {},
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
          ncss: {},
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
