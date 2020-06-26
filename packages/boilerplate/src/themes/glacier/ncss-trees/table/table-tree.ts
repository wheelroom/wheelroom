import { TableSectionModelNcssTree } from '../../../../../src-table-wheel'
import {
  iconSmallTopicNcssNode,
  iconButtonSmallNcssNode,
} from '../../shared-ncss/icon-ncss'
import { containerNcssNode, wrapperNcssNode } from '../../shared-ncss/grid-ncss'
import { embedNcssNode } from '../../shared-ncss/embed-ncss'
import { deepMerge, DeepPartial } from '../../../../../src-core'

export const tableSectionTableNcssTree: DeepPartial<TableSectionModelNcssTree> = {
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
    th: {
      ncss: {
        label: 'table-th',
        textAlign: 'left',
        bg: 'skyblue',
        p: 2,
      },
    },
    tr: {
      ncss: {
        label: 'table-tr',
      },
    },
    dd: {
      ncss: {
        label: 'table-description-definition',
        m: 0,
        fontWeight: 4,
      },
    },
    dl: {
      ncss: {
        label: 'table-description-list',
        lineHeight: '1.58',
        m: 0,
      },
    },
    dt: {
      ncss: {
        label: 'table-description-term',
      },
    },
    icon: {
      ncss: {
        label: 'table-icon',
        ...iconSmallTopicNcssNode.ncss,
      },
    },
    actionGroup: {
      ncss: {
        label: 'table-action-group',
        mx: -1,
      },
    },
    action: {
      ncss: {
        label: 'table-action',
        display: 'inline-flex',
        m: 1,
        fontWeight: 4,
      },
      icon: {
        ncss: {
          label: 'table-action-icon',
          ...iconButtonSmallNcssNode.ncss,
        },
      },
    },
    tableRow: {
      ncssSwitch: {
        headerVariation: {
          label: 'table-row-tr-header',
        },
        bodyVariation: {
          label: 'table-row-tr-body',
        },
        footerVariation: {
          label: 'table-row-tr-footer',
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
      cell: {
        ncss: {
          label: 'table-row-cell',
          p: 2,
        },
      },
      topic: {
        ncss: {},
        content: {
          ncss: {
            textAlign: 'center',
            my: 1,
          },
          actions: {
            ncss: {},
            link: {
              ncss: {
                display: 'inline-flex',
                fontSize: 4,
              },
              icon: {
                ncss: {},
              },
            },
          },
          text: {
            ncss: {},
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
          },
        },
        media: {
          ncss: {
            my: 1,
          },
          embed: embedNcssNode,
          image: {
            picture: {
              ncss: {},
            },
            ncss: {},
            figcaption: {
              ncss: {},
            },
          },
          mediaBreakpoint: {
            picture: {
              ncss: {},
            },
            ncss: {},
          },
          video: {
            ncss: {},
            description: {
              ncss: {},
            },
          },
        },
      },
    },
  },
  wrapper: wrapperNcssNode,
}
