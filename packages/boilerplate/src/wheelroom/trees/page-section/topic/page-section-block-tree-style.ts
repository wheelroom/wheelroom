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
      /** NCSS here does not work */
      ncss: { color: 'purple' },
      text: {
        heading: {
          /** NCSS here does not work */
          ncss: { color: 'silver' },
        },
        abstract: {
          /** NCSS here does not work */
          ncss: { color: 'purple' },
        },
      },
    },
    media: {
      /** NCSS here does not work */
      ncss: {},
      image: {
        img: {
          /** NCSS here does not work */
          ncss: {
            h: 1,
            objectFit: 'cover',
            position: 'absolute',
            w: 1,
          },
        },
        picture: {
          /** NCSS here does not work */
          ncss: {
            display: 'block',
            h: '0px',
            pb: '65.25%',
            position: 'relative',
          },
        },
        figcaption: {
          /** NCSS here does not work */
          ncss: {},
        },
      },
      video: {
        video: {
          ncss: {
            my: [0, 0],
          },
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: {},
}
