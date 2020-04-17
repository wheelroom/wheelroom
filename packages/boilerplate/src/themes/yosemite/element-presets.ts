import { ElementResets as ElementsPresets } from '../../wheelroom/wheels/elements/types/element-resets'

const headingStyle = {
  mt: 0,
  mb: 3,
}

const paragraphStyle = {
  fontSize: 6,
  lineHeight: 4,
  fontWeight: 4,
  mt: 0,
  mb: 3,
}

export const elementPresets: ElementsPresets = {
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
    ncss: {},
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
      fontSize: [8, 9, 10, 11],
    },
  },
  h2: {
    ncss: {
      ...headingStyle,
    },
  },
  h3: {
    ncss: {
      ...headingStyle,
    },
  },
  h4: {
    ncss: {
      ...headingStyle,
    },
  },
  h5: {
    ncss: {
      ...headingStyle,
    },
  },
  h6: {
    ncss: {
      ...headingStyle,
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
