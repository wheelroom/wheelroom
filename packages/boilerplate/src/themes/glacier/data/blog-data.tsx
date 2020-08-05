import { BlogSectionData } from '@wheelroom/wheel-blog'
import { DeepPartial } from '@wheelroom/core'

export const blogSectionData: DeepPartial<BlogSectionData> = {
  blog: {
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
