import { wrapperStyle } from '../elements/grid-style'
import { PageSectionPriceTableWheelStyle } from '../../../wheelroom/wheels/section/unicorn/presets/page-section-price-table-preset'

export const sectionPriceTableStyle: PageSectionPriceTableWheelStyle = {
  container: {
    ncss: {},
  },
  table: {
    ncss: {
      fontSize: 4,
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
        m: 0,
      },
    },
    dt: {
      ncss: {},
    },
    row: {
      ncss: {},
      th: {
        ncss: {
          w: 2 / 6,
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
          m: 0,
        },
      },
      dt: {
        ncss: {},
      },
      cell: {
        ncss: {
          w: 1 / 6,
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
              icon: {
                ncss: {
                  w: '24px',
                  h: '24px',
                },
              },
            },
          },
          media: {
            ncss: {
              my: 1,
            },
            embed: {
              ncss: {
                display: 'block',
                h: '0px',
                pb: '56.25%',
                position: 'relative',
                iframe: {
                  position: 'absolute',
                },
              },
            },
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
