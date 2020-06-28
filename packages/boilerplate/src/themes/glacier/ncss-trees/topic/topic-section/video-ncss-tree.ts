import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { DeepPartial } from '../../../../../../src-core'

export const topicSectionVideoNcssTree: DeepPartial<TopicSectionModelNcssTree> = {
  container: containerNcssNode,
  topic: {
    content: {
      ncss: {
        p: 3,
      },
    },
    icon: iconTopicNcssNode,
    embed: embedNcssNode,
  },
  wrapper: wrapperNcssNode,
}
