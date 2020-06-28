import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { wrapperNcssNode } from '../../grid-ncss'
import { DeepPartial } from '../../../../../../src-core'

export const topicSectionGalleryNcssTree: DeepPartial<TopicSectionModelNcssTree> = {
  container: {
    ncss: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  },
  topic: {
    ncss: {
      w: 1 / 2,
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
