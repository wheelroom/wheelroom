import { FreestyleWheelStyle } from '../../../wheelroom/wheels/page/freestyle/page-section-freestyle-preset'
import { wrapperStyle } from '../elements/grid-style'

export const pageSectionFreestyleStyle: FreestyleWheelStyle = {
  container: {
    ncss: {},
  },
  text: {
    h1: {
      ncss: {},
    },
    h2: {
      ncss: {
        pt: 3,
      },
    },
    h3: {
      ncss: {
        pt: 3,
      },
    },
    h4: {
      ncss: {
        pt: 3,
      },
    },
    h5: {
      ncss: {
        pt: 3,
      },
    },
    h6: {
      ncss: {
        pt: 3,
      },
    },
    ul: {
      ncss: {},
    },
    ol: {
      ncss: {},
    },
    li: {
      ncss: {},
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
  wrapper: {
    ncss: {
      ...wrapperStyle,
    },
  },
}
