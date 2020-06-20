import { ElementStyles } from '../../../../src-core'
import { headingStyle } from './heading-style'
import { paragraphStyle } from './paragraph-style'
import { primaryButtonStyle } from './button-style'

export const elementStyles: ElementStyles = {
  a: {
    ncss: {
      color: 'link',
      ':focus': {
        outlineColor: 'outline',
      },
    },
  },
  any: {
    ncss: {},
  },
  blockquote: {
    ncss: {
      px: [3, 5, 7],
      mx: 0,
      my: [4, 5, 6],
      '>p': {
        fontSize: 8,
        fontStyle: 'italic',
      },
    },
  },
  box: {
    ncss: {},
  },
  button: primaryButtonStyle,
  code: {
    ncss: {
      whiteSpace: 'pre',
    },
  },
  container: {
    ncss: {},
  },
  dd: {
    ncss: {},
  },
  dl: {
    ncss: {},
  },
  dt: {
    ncss: {},
  },
  featherIcon: {
    ncss: {},
  },
  flex: {
    ncss: {},
  },
  fluid: {
    ncss: {},
  },
  gLink: {
    ncss: {
      color: 'link',
      ':focus': {
        outlineColor: 'outline',
      },
    },
  },
  h1: {
    ncss: {
      ...headingStyle.ncss,
      fontSize: [10, 10, 11, 11],
    },
  },
  h2: {
    ncss: {
      ...headingStyle.ncss,
      fontSize: [9, 9, 10, 10],
    },
  },
  h3: {
    ncss: {
      ...headingStyle.ncss,
      fontSize: [7, 7, 8, 8],
    },
  },
  h4: {
    ncss: {
      ...headingStyle.ncss,
      fontSize: [6, 6, 7, 7],
    },
  },
  h5: {
    ncss: {
      ...headingStyle.ncss,
      fontSize: [6, 6, 7, 7],
    },
  },
  h6: {
    ncss: {
      ...headingStyle.ncss,
      fontSize: [6, 6, 7, 7],
    },
  },
  hr: {
    ncss: {},
  },
  embed: {
    ncss: {},
  },
  image: {
    figcaption: {
      ncss: {},
    },
    img: {
      ncss: {},
    },
    picture: {
      ncss: {},
    },
  },
  kbd: {
    ncss: {},
  },
  mediaBreakpoint: {
    picture: {
      ncss: {},
    },
    img: {
      ncss: {},
    },
  },
  small: {
    ncss: {},
  },
  sub: {
    ncss: {},
  },
  sup: {
    ncss: {},
  },
  li: {
    ncss: {},
  },
  ol: {
    ncss: {},
  },
  p: paragraphStyle,
  pre: {
    ncss: {
      bg: 'codeBg',
      p: 3,
    },
  },
  samp: {
    ncss: {},
  },
  strong: {
    ncss: {},
  },
  table: {
    ncss: {},
  },
  textIcon: {
    ncss: {},
  },
  td: {
    ncss: {},
  },
  th: {
    ncss: {},
  },
  tr: {
    ncss: {},
  },
  ul: {
    ncss: {},
  },
  time: {
    ncss: {},
  },
  video: {
    description: {
      ncss: {},
    },
    video: {
      ncss: {
        ':focus': {
          outlineColor: 'outline',
        },
      },
    },
  },
  wrapper: {
    ncss: {},
  },
}
