import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { primaryButtonNcssNode } from '../../../element-ncss/button-ncss'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { deepMerge, DeepPartial } from '../../../../../../src-core'

export const topicSectionBlockNcssTree: DeepPartial<TopicSectionModelNcssTree> = {
  container: deepMerge([
    containerNcssNode,
    {
      ncss: {
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
      },
    },
  ]),
  topic: {
    ncss: {
      p: 3,
      w: [1, 1 / 2, 1 / 3],
      maxWidth: '35em',
    },
    content: {
      ncss: {
        p: 3,
      },
    },
    actionGroup: {
      ncss: {
        flex: '0',
        mt: 3,
      },
    },
    action: {
      ...primaryButtonNcssNode,
      icon: {
        ncss: {},
      },
    },
    text: {
      ncss: {
        flex: '1 1 auto',
      },
    },
    abstract: {
      ncss: {
        mb: 0,
      },
    },
    icon: iconTopicNcssNode,
    embed: embedNcssNode,
    image: {
      ncss: {
        h: 1,
        objectFit: 'cover',
        position: 'absolute',
        w: 1,
      },
      picture: {
        ncss: {
          display: 'block',
          h: '0px',
          pb: '56.25%',
          position: 'relative',
        },
      },
    },
  },
  wrapper: wrapperNcssNode,
}
