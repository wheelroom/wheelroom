import { ElementStyles } from '../../wheelroom/wheels/elements/types/element-styles'
import { headingStyle } from './elements/heading-style'
import { paragraphStyle } from './elements/paragraph-style'
import { primaryButtonStyle } from './elements/button-style'

export const elementStyles: ElementStyles = {
  a: {
    ncss: {
      color: 'link',
    },
  },
  any: {
    ncss: {},
  },
  blockquote: {
    ncss: {},
  },
  box: {
    ncss: {},
  },
  button: {
    ncss: {
      ...primaryButtonStyle,
    },
  },
  code: {
    ncss: {},
  },
  container: {
    ncss: {},
  },
  containerMaxWidth: {
    ncss: {},
  },
  featherIcon: {
    ncss: {
      color: 'iconColor',
    },
  },
  flex: {
    ncss: {},
  },
  gLink: {
    ncss: {
      color: 'link',
    },
  },
  h1: {
    ncss: {
      ...headingStyle,
      fontSize: [10, 10, 11, 11],
    },
  },
  h2: {
    ncss: {
      ...headingStyle,
      fontSize: [9, 9, 10, 10],
    },
  },
  h3: {
    ncss: {
      ...headingStyle,
      fontSize: [7, 7, 8, 8],
    },
  },
  h4: {
    ncss: {
      ...headingStyle,
      fontSize: [6, 6, 7, 7],
    },
  },
  h5: {
    ncss: {
      ...headingStyle,
      fontSize: [6, 6, 7, 7],
    },
  },
  h6: {
    ncss: {
      ...headingStyle,
      fontSize: [6, 6, 7, 7],
    },
  },
  hr: {
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
  p: {
    ncss: {
      ...paragraphStyle,
    },
  },
  pre: {
    ncss: {},
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
  ul: {
    ncss: {},
  },
  video: {
    description: {
      ncss: {},
    },
    video: {
      ncss: {},
    },
  },
  wrapper: {
    ncss: {},
  },
}
