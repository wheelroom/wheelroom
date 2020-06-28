import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import {
  primaryButtonNcssNode,
  displayButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-ncss/button-ncss'
import { iconButtonNcssNode, iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { wrapperNcssNode } from '../../grid-ncss'
import { DeepPartial } from '../../../../../../src-core'

export const topicSectionFeaturedNcssTree: DeepPartial<TopicSectionModelNcssTree> = {
  container: {
    ncss: {
      flexDirection: 'column',
    },
  },
  topic: {
    ncssSwitch: {
      container: {
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-evenly',
        py: 3,
        alignItems: 'center',
      },
    },
    content: {
      ncss: {
        flexDirection: 'column',
        p: 3,
        maxWidth: ['35em', '35em', '45%'],
        w: 1,
      },
    },
    actionGroup: {
      ncss: {
        mt: [4, 4, 5],
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
    abstract: {
      ncss: {
        mb: 0,
      },
    },
    icon: iconTopicNcssNode,
    media: {
      ncss: {
        flexDirection: 'column',
        p: 3,
        maxWidth: ['35em', '35em', '45%'],
        w: 1,
      },
    },
    embed: embedNcssNode,
  },
  wrapper: wrapperNcssNode,
}
