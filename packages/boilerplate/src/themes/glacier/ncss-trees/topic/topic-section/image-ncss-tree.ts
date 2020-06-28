import { TopicSectionNcssTree } from '../../../../../../src-topic-wheel'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { wrapperNcssNode } from '../../grid-ncss'
import { DeepPartial } from '../../../../../../src-core'

export const topicSectionImageNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: {
    ncss: {
      flexDirection: ['column', 'row'],
    },
  },
  topic: {
    icon: iconTopicNcssNode,
    embed: embedNcssNode,
  },
  wrapper: wrapperNcssNode,
}
