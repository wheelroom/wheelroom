import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionBlockTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionBlockTreeStyle: PageSectionBlockTreeStyle = {
  container: {
    alignItems: ['center', 'initial'],
    flexDirection: ['column', 'row'],
    flexWrap: 'wrap',
    justifyContent: 'center',
    m: 'auto',
    p: 0,
    w: 1,
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        ncss: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
        },
        text: {
          wrapper: {
            display: 'block',
            flex: '1 1 auto',
          },
        },
      },
    },
    media: {
      ncss: {
        image: {
          ncss: {
            img: {
              ncss: {
                h: 1,
                objectFit: 'cover',
                position: 'absolute',
                w: 1,
              },
            },
            picture: {
              ncss: {
                display: 'block',
                h: '0px',
                pb: '65.25%',
                position: 'relative',
              },
            },
          },
        },
        video: {
          video: {
            ncss: {
              my: [0, 0],
            },
          },
        },
      },
    },
  },
  wrapper: {},
}
