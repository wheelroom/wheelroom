import { TableSectionNcssTree } from '../../../../../src-table-wheel'
import { iconSmallTopicNcssNode, iconButtonSmallNcssNode } from '../icon-ncss'
import { containerNcssNode, wrapperNcssNode } from '../grid-ncss'
import { embedNcssNode } from '../embed-ncss'
import { deepMerge, DeepPartial } from '../../../../../src-core'
import { topicNcssTree } from '../topic/topic/topic-ncss-tree'

export const tableSectionTableNcssTree: DeepPartial<TableSectionNcssTree> = {
  container: deepMerge([
    containerNcssNode,
    {
      ncss: {
        label: 'table-container',
        px: 3,
        overflow: 'hidden',
      },
    },
  ]),
  table: {
    ncss: {
      label: 'table-section-table',
      overflowX: 'auto',
      w: 1,
    },
    tableElement: {
      ncss: {
        label: 'table',
        fontSize: 4,
      },
    },
    ncssSwitch: {
      headerVariation: {
        label: 'table-row-tr-header',
        bg: 'skyblue',
      },
      bodyVariation: {
        label: 'table-row-tr-body',
      },
      footerVariation: {
        label: 'table-row-tr-footer',
        bg: 'skyblue',
      },
    },
    th: {
      ncss: {
        label: 'table-row-th',
        textAlign: 'left',
        p: 2,
      },
    },
    dd: {
      ncss: {
        label: 'table-row-description-definition',
        m: 0,
        fontWeight: 4,
      },
    },
    dl: {
      ncss: {
        label: 'table-row-description-list',
        lineHeight: '1.58',
        m: 0,
      },
    },
    dt: {
      ncss: {
        label: 'table-row-description-term',
      },
    },
    icon: {
      ncss: {
        label: 'table-row-icon',
        ...iconSmallTopicNcssNode.ncss,
      },
    },
    actionGroup: {
      ncss: {
        label: 'table-row-actions',
      },
    },
    action: {
      ncss: {
        label: 'table-row-action',
        display: 'inline-flex',
        m: 1,
        mx: -1,
        fontWeight: 4,
      },
      icon: {
        ncss: {
          label: 'table-row-action-icon',
          ...iconButtonSmallNcssNode.ncss,
        },
      },
    },
    td: {
      ncss: {
        label: 'table-row-td',
        p: 2,
      },
    },
    topic: deepMerge([
      topicNcssTree,
      {
        content: {
          ncss: {
            textAlign: 'center',
            my: 1,
          },
        },
        action: {
          ncss: {
            display: 'inline-flex',
            fontSize: 4,
          },
        },
        abstract: {
          ncss: {
            fontSize: 4,
          },
        },
        heading: {
          ncss: {
            fontSize: 4,
          },
        },
        icon: iconSmallTopicNcssNode,
        media: {
          ncss: {
            my: 1,
          },
        },
        embed: embedNcssNode,
      },
    ]),
  },
  wrapper: wrapperNcssNode,
}
