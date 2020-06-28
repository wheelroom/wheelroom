import { TopicSectionModelNcssTree } from '../../../../../../src-topic-wheel'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { primaryButtonNcssNode } from '../../../element-ncss/button-ncss'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'
import { deepMerge, DeepPartial } from '../../../../../../src-core'

export const topicSectionCardNcssTree: DeepPartial<TopicSectionModelNcssTree> = {
  container: deepMerge([
    containerNcssNode,
    {
      ncss: {
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    },
  ]),
  topic: {
    ncss: {
      maxWidth: '288px',
      minWidth: '288px',
      m: 3,
      border: '1px solid black',
      borderRadius: 4,
      borderColor: 'cardBorder',
      boxShadow: '0 0 16px',
      color: 'cardShadow',
      textDecoration: 'none',
    },
    content: {
      ncss: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        px: 3,
        pb: 3,
        color: 'sectionText',
      },
    },
    actionGroup: {
      ncss: {
        flex: '0',
        mt: 3,
      },
    },
    action: primaryButtonNcssNode,
    text: {
      ncss: {
        display: 'block',
        flex: '1 1 auto',
      },
    },
    abstract: {
      ncss: {
        mb: 0,
      },
    },
    icon: iconTopicNcssNode,
    media: {
      ncss: {
        p: 3,
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
          display: 'block',
          h: '178px',
        },
      },
    },
  },
  wrapper: wrapperNcssNode,
}

export const topicAsFullLinkNcssNode = {
  topic: {
    ncss: {
      label: 'topic-card-shadow',
      transition: 'transform .25s ease 0s',
      transform: 'scale(1)',
      ':hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)',
      },
    },
  },
}