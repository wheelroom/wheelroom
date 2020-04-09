import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionHeadlineTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionHeadlineTreeStyle: PageSectionHeadlineTreeStyle = {
  container: {},
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
