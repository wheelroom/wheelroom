import { TopicSectionNcssTree } from '@wheelroom/wheel-topic'
import { deepMerge, DeepPartial } from '@wheelroom/core'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'
import { primaryButtonNcssNode } from '../../../element-ncss/button-ncss'
import { iconTopicNcssNode } from '../../icon-ncss'
import { embedNcssNode } from '../../embed-ncss'

const containerNcss = {
  maxWidth: '288px',
  minWidth: '288px',
  m: 3,
  border: '1px solid transparent',
  borderColor: 'cardBorder',
  borderRadius: 4,
  textDecoration: 'none',
  '> div:last-of-type': {
    pt: 0,
  },
  '> div:only-of-type': {
    pt: 3,
  },
}

export const topicSectionCardNcssTree: DeepPartial<TopicSectionNcssTree> = {
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
    ncssSwitch: {
      container: {
        ...containerNcss,
      },
      containerAsLink: {
        ...containerNcss,
        textDecoration: 'none',
        borderColor: 'cardBorder',
        boxShadow: '0 0 16px',
        color: 'cardShadow',
        transition: 'transform .25s ease',
        ':hover': {
          transform: 'translate3d(0, -4px, 0)',
        },
      },
    },
    content: {
      ncss: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        color: 'sectionText',
        p: 3,
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
