import { GridElementStyle } from '../../../elements/resets/grid-reset'
import { HeadingElementStyle } from '../../../elements/resets/heading-reset'
import { ImageElementStyle } from '../../../elements/image'
import { NcssProps } from '../../../lib/get-wheel'
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
    ncss: {},
    media: {
      ncss: {},
      image: {
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
      },
    },
    content: {
      ncss: {},
      categories: {
        ncss: {},
      },
      date: {
        ncss: {},
      },
      text: {
        ncss: {},
        heading: {
          ncss: {},
        },
        abstract: {
          ncss: {},
        },
      },
    },
  },
  wrapper: {
    ncss: {},
  },
}
