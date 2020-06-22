import { embedStyle } from '../shared-styles/embed-style'
import {
  iconSmallTopicStyle,
  iconButtonSmallStyle,
} from '../shared-styles/icon-style'
import { TableSectionWheelStyle } from '../../../../../src-table-wheel'
import { wrapperStyle } from '../shared-styles/grid-style'

export const tableSectionTableStyle: TableSectionWheelStyle = {
  container: {
    ncss: {
      label: 'table-container',
      px: 3,
      overflow: 'hidden',
    },
  },
  section: {
    ncss: {
      label: 'table-variation',
      overflowX: 'auto',
    },
    table: {
      ncss: {
        label: 'table',
        fontSize: 4,
      },
    },
    th: {
      ncss: {
        label: 'table-head',
        textAlign: 'left',
        bg: 'skyblue',
        p: 2,
      },
    },
    tr: {
      ncss: {
        label: 'table-row',
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
    actions: {
      ncss: {
        label: 'table-actions',
        mx: -1,
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
    },
    row: {
      ncss: {
        label: 'table-row',
      },
      header: {
        ncss: {
          label: 'table-row-header-style',
        },
      },
      footer: {
        ncss: {
          label: 'table-row-footer-style',
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
      actions: {
        ncss: {
          label: 'table-row-actions',
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
      },
      cell: {
        ncss: {
          label: 'table-row-cell',
          p: 2,
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
              img: {
                ncss: {},
              },
              figcaption: {
                ncss: {},
              },
            },
            mediaBreakpoint: {
              picture: {
                ncss: {},
              },
              img: {
                ncss: {},
              },
            },
            video: {
              video: {
                ncss: {},
              },
              description: {
                ncss: {},
              },
            },
          },
        },
      },
    },
  },
  wrapper: wrapperStyle,
}
