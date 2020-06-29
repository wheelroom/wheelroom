import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { DeepPartial } from '@wheelroom/core'
import {
  primaryButtonNcssNode,
  displayButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-ncss/button-ncss'
import { iconButtonNcssNode, iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { containerNcssNode } from '../../grid-ncss'

export const topicSectionHeroNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: containerNcssNode,
  topic: {
    ncssSwitch: {
      container: {
        position: 'relative',
        w: 1,
      },
    },
    content: {
      ncss: {
        maxWidth: '80em',
        mx: 'auto',
        px: [4, 5, 6],
        py: [7, 8, 10, 12],
        w: 1,
      },
    },
    actionGroup: {
      ncss: {
        maxWidth: '30em',
        mt: 5,
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
        maxWidth: '30em',
      },
    },
    abstract: {
      ncss: {
        fontSize: [7, 7, 8, 8],
        mb: 0,
      },
    },
    icon: iconTopicNcssNode,
    media: {
      ncss: {
        bottom: '0',
        left: '0',
        position: 'absolute',
        right: '0',
        top: '0',
        overflow: 'hidden',
        zIndex: -1,
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
          h: 1,
          w: 1,
        },
      },
    },
    video: {
      ncss: {
        h: 1,
      },
    },
  },
  wrapper: {},
}
