import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { DeepPartial } from '@wheelroom/core'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { wrapperNcssNode } from '../../grid-ncss'

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
