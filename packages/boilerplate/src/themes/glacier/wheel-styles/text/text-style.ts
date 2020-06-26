import { TextSectionModelNcssTree } from '../../../../../src-text-wheel'
import { containerStyle, wrapperNcss } from '../shared-styles/grid-style'
import { headingTextStyle } from '../../element-styles/heading-style'
import { embedNcss } from '../shared-styles/embed-style'
import { DeepPartial } from '../../../../../src-core'

export const textSectionTextNcssTree: DeepPartial<TextSectionModelNcssTree> = {
  container: containerStyle,
  text: {
    ncss: {
      label: 'text-section-text',
      maxWidth: '712px', // Golden read width ratio
      mx: 'auto',
      px: 3,
    },
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
      ncss: {
        wordBreak: 'break-word',
        hyphens: 'auto',
      },
    },
    inlinesHyperlink: {
      ncss: {
        wordBreak: 'break-word',
        hyphens: 'auto',
      },
    },
    hr: {
      ncss: {},
    },
    embed: {
      ncss: {
        ...embedNcss.ncss,
        mt: 3,
        mb: 5,
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
      ncss: {},
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
      ncss: {
        mt: 3,
        mb: 5,
      },
      description: {
        ncss: {},
      },
    },
  },
  wrapper: wrapperNcss,
}
