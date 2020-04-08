import { NcssProps } from '../../../elements/types'
import { TopicTreeStyle } from '../../topic/topic-tree-style'

export interface PageSectionQuoteTreeStyle {
  container?: NcssProps
  topic?: TopicTreeStyle
  wrapper?: NcssProps
}

export const pageSectionQuoteTreeStyle: PageSectionQuoteTreeStyle = {
  container: {},
  topic: {
    content: {
      contentActions: {
        wrapper: {},
      },
      contentText: {
        abstract: {},
        heading: {},
        wrapper: {},
      },
      wrapper: {},
    },
    media: {
      image: {
        img: {},
        picture: {},
      },
      wrapper: {},
    },
    wrapper: {},
  },
  wrapper: {},
}
