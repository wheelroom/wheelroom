import { TopicPreset } from '../../topic/presets/topic-preset'
import { GridPreset } from '../../elements/grid-preset'
import {NcssProps} from "../../types";

export interface PageSectionHeadlinePreset {
  container: { ncss: NcssProps }
  topic: TopicPreset
  wrapper: GridPreset
}

export const pageSectionHeadlinePreset: PageSectionHeadlinePreset = {
  container: {
    ncss: {
      color: 'red',
    },
  },
  topic: {
    ncss: {},
    content: {
      ncss: {
        textAlign: 'center',
        mx: 'auto',
        maxWidth: [1, '960px'],
      },
      actions: {
        ncss: {},
        link: {
          ncss: {},
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {},
        },
        heading: {
          ncss: {},
        },
        icon: {
          ncss: {},
        },
      },
    },
    media: {
      ncss: {},
      image: {
        img: {
          ncss: {},
        },
        picture: {
          ncss: {},
        },
        figcaption: {
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
  wrapper: {
    ncss: {},
  },
}
