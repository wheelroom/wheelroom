import { GridElementStyle } from '../../../elements/resets/grid-reset'
import { HeadingElementStyle } from '../../../elements/resets/heading-reset'
import { ImageElementStyle } from '../../../elements/image'
import { NcssProps } from '../../../types/wheel'
import { ParagraphElementStyle } from '../../../elements/resets/paragraph-reset'
import { VideoElementStyle } from '../../../elements/video'

export interface BlogListWheelStyle {
  container: GridElementStyle
  blog: {
    ncss: NcssProps
    media: {
      ncss: NcssProps
      image: ImageElementStyle
      video: VideoElementStyle
    }
    content: {
      ncss: NcssProps
      date: NcssProps
      categories: NcssProps
      text: {
        ncss: NcssProps
        heading: HeadingElementStyle
        abstract: ParagraphElementStyle
      }
    }
  }
  wrapper: GridElementStyle
}

export const blogSectionListPreset: BlogListWheelStyle = {
  container: {
    ncss: {},
  },
  blog: {
    ncss: {
      label: 'blog',
      textDecoration: 'none',
      p: 3,
      w: ['auto', 1 / 2, 1 / 3],
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
      },
      video: {
        video: {
          ncss: {},
        },
      },
    },
    content: {
      ncss: {
        label: 'blog-content',
        p: 3,
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
      text: {
        ncss: {
          label: 'blog-text',
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
    },
  },
  wrapper: {
    ncss: {},
  },
}
