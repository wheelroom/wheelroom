import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { DeepPartial } from '@wheelroom/core'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { wrapperNcssNode } from '../../grid-ncss'

export const topicSectionGalleryNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: {
    ncss: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  },
  topic: {
    ncssSwitch: {
      container: {
        w: 1 / 2,
      },
    },
    content: {
      ncss: {
        p: 3,
      },
    },
    icon: iconTopicNcssNode,
    embed: embedNcssNode,
    image: {
      picture: {
        ncss: {
          p: 3,
        },
      },
    },
  },
  wrapper: wrapperNcssNode,
}
