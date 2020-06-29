import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { DeepPartial } from '@wheelroom/core'
import { aLinkButtonNcssNode } from '../../../element-ncss/button-ncss'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { wrapperNcssNode } from '../../grid-ncss'

export const topicSectionShowcaseNcssTree: DeepPartial<TopicSectionNcssTree> = {
  container: {
    ncss: {
      alignItems: ['center', 'baseline'],
      justifyContent: 'center',
      maxWidth: ['35em', '54rem'],
      flexDirection: 'column',
    },
  },
  topic: {
    ncssSwitch: {
      container: {
        flexDirection: ['column', 'row'],
        py: 3,
      },
    },
    content: {
      ncss: {
        flexDirection: 'column',
        p: 3,
      },
    },
    actionGroup: {
      ncss: {
        mt: 3,
      },
    },
    action: aLinkButtonNcssNode,
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
        maxWidth: '254px',
        w: 1,
      },
    },
    embed: embedNcssNode,
  },
  wrapper: wrapperNcssNode,
}
