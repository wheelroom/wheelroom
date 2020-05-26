import { FreestyleWheelStyle } from '../../../wheelroom/wheels/section/freestyle/page-section-freestyle-preset'
import { wrapperStyle } from '../elements/grid-style'
import { headingTextStyle } from '../elements/heading-style'

export const pageSectionFreestyleStyle: FreestyleWheelStyle = {
  container: {
    ncss: {},
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
