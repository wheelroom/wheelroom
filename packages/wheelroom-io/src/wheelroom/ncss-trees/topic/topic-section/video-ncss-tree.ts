import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { DeepPartial } from '@wheelroom/core'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'

export const topicSectionVideoNcssTree: DeepPartial<TopicSectionNcssTree> = {
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
