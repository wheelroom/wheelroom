import { TextSectionNcssTree, DeepPartial } from '@wheelroom/core'
import { containerNcssNode, wrapperNcssNode } from '../grid-ncss'
import { headingTextNcssNode } from '../../element-ncss/heading-ncss'
import { embedNcssNode } from '../embed-ncss'

export const textSectionTextNcssTree: DeepPartial<TextSectionNcssTree> = {
  container: containerNcssNode,
  richText: {
    ncss: {
      label: 'text-section-text',
      maxWidth: '712px', // Golden read width ratio
      mx: 'auto',
      px: 3,
    },
    h1: headingTextNcssNode,
    h2: headingTextNcssNode,
    h3: headingTextNcssNode,
    h4: headingTextNcssNode,
    h5: headingTextNcssNode,
    h6: headingTextNcssNode,
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
        ...embedNcssNode.ncss,
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
  wrapper: wrapperNcssNode,
}
