import {
  iconSmallTopicStyle,
  iconButtonSmallStyle,
} from '../shared-styles/icon-style'
import { wrapperStyle } from '../shared-styles/grid-style'
import { TableSectionModelStyle } from '../../../../../src-table-wheel'
import { embedStyle } from '../shared-styles/embed-style'

export const tableSectionPriceStyle: TableSectionModelStyle = {
  container: {
    ncss: {
      label: 'table-container',
      px: 3,
      overflow: 'hidden',
    },
  },
  section: {
    ncss: {
      label: 'table-section-price',
      overflowX: 'auto',
      w: 1,
    },
    table: {
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
        ...iconSmallTopicStyle.ncss,
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
          ...iconButtonSmallStyle.ncss,
        },
      },
    },
    row: {
      ncssSwitch: {
        trHeader: {
          ncss: {
            label: 'table-row-tr-header',
          },
        },
        trBody: {
          ncss: {
            label: 'table-row-tr-body',
          },
        },
        trFooter: {
          ncss: {
            label: 'table-row-tr-footer',
          },
        },
      },
      th: {
        ncss: {
          label: 'table-row-header-cell',
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
          ...iconSmallTopicStyle.ncss,
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
            ...iconButtonSmallStyle.ncss,
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
            icon: iconSmallTopicStyle,
          },
        },
        media: {
          ncss: {
            my: 1,
          },
          embed: embedStyle,
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
  wrapper: wrapperStyle,
}
