import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { deepMerge, DeepPartial } from '@wheelroom/core'
import {
  primaryButtonNcssNode,
  displayButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-ncss/button-ncss'
import { iconButtonNcssNode, iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'

export const topicSectionQuoteNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: containerNcssNode,
  topic: {
    content: {
      ncss: {
        textAlign: 'center',
        p: 3,
        maxWidth: [1, '60em', '68em'],
        mx: 'auto',
      },
    },
    actionGroup: {
      ncss: {
        mt: 6,
      },
    },
    action: {
      ncss: {
        ...primaryButtonNcssNode.ncss,
        ...displayButtonNcssNode.ncss,
        ':nth-of-type(2)': {
          ...secondaryButtonNcssNode.ncss,
          ...displayButtonNcssNode.ncss,
        },
      },
      icon: iconButtonNcssNode,
    },
    text: {
      ncss: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    abstract: {
      ncss: {
        order: '2',
        fontSize: [9, 9, 10],
        fontStyle: 'italic',
        lineHeight: 3,
        my: 0,
        p: 0,
      },
    },
    heading: {
      ncss: {
        order: '1',
      },
    },
    icon: {
      ncss: {
        ...iconTopicNcssNode.ncss,
        order: '0',
      },
    },
    media: {
      ncss: {
        p: 3,
      },
    },
    embed: embedNcssNode,
    image: {
      ncss: {
        h: 1,
        objectFit: 'cover',
      },
      picture: {
        ncss: {
          overflow: 'hidden',
          h: '200px',
          w: '200px',
          borderRadius: '100px',
          mx: 'auto',
        },
      },
    },
  },
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        py: 6,
      },
    },
  ]),
}
