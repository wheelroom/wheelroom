import { DeepPartial } from '@wheelroom/core'
import { BlogSectionData } from '@wheelroom/wheel-blog'

// Author data is using the Topic data structure
export const authorData = {
  hideAbstract: false,
  hideActions: false,
  hideContent: false,
  hideHeading: false,
  hideIcon: true,
  hideMedia: false,
  hideText: false,
}

export const blogSectionData: DeepPartial<BlogSectionData> = {
  blog: {
    author: {
      ...authorData,
    },
    hideAbstract: false,
    hideAuthors: false,
    hideCategories: false,
    hideDate: false,
    hideHeader: false,
    hideHeading: false,
    hideMedia: false,
    hideRichText: false,
  },
  list: {
    hideAbstract: false,
    hideCategories: false,
    hideContent: false,
    hideDate: false,
    hideHeading: false,
    hideMedia: false,
    hideText: false,
  },
}
