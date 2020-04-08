import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionHeadlineTreeStyle {
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionHeadlineTreeStyle: PageSectionHeadlineTreeStyle = {
  topic: {
    content: {
      contentActions: {
        link: {},
        wrapper: {},
      },
      contentText: {
        abstract: {},
        heading: {},
      },
      wrapper: {},
    },
    media: {
      image: {
        picture: {},
      },
    },
    wrapper: {},
  },
  wrapper: {},
}
