import { wrapperStyle } from '../../../themes/glacier/element-styles/grid-style'
import { TableSectionWheelStyle } from '../../../../../wheelroom'
import { iconSmallTopicStyle } from '../../../themes/glacier/element-styles/icon-style'
import { embedStyle } from '../../../themes/glacier/element-styles/embed-style'

export const tableSectionTableStyle: TableSectionWheelStyle = {
  container: {
    ncss: {},
  },
  section: {
    ncss: {},
    table: {
      ncss: {
        fontSize: 4,
      },
    },
    th: {
      ncss: {
        textAlign: 'left',
        bg: 'skyblue',
        p: 2,
      },
    },
    tr: {
      ncss: {},
    },
    dd: {
      ncss: {
        m: 0,
        fontWeight: 4,
      },
    },
    dl: {
      ncss: {
        lineHeight: '1.58',
        m: 0,
      },
    },
    dt: {
      ncss: {},
    },
    icon: iconSmallTopicStyle,
    actions: {
      ncss: {},
      action: {
        ncss: {
          fontWeight: 4,
        },
        icon: {
          ncss: {},
        },
      },
    },
    row: {
      ncss: {},
      header: {
        ncss: {},
      },
      footer: {
        ncss: {},
      },
      th: {
        ncss: {
          textAlign: 'left',
          p: 2,
        },
      },
      dd: {
        ncss: {
          m: 0,
          fontWeight: 4,
        },
      },
      dl: {
        ncss: {
          lineHeight: '1.58',
          m: 0,
        },
      },
      dt: {
        ncss: {},
      },
      icon: iconSmallTopicStyle,
      actions: {
        ncss: {},
        action: {
          ncss: {
            fontWeight: 4,
          },
          icon: {
            ncss: {},
          },
        },
      },
      cell: {
        ncss: {
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
