/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { FeaturedDisplay } from '../../core/page-section-views/featured-display'
import { FeaturedListDisplay } from '../../core/page-section-views/featured-list-display'
import { featuredDisplayStyleTree } from '../../styles/style-trees/featured-display-style-tree'
import { featuredListDisplayStyleTree } from '../../styles/style-trees/featured-list-display-style-tree'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.topicCount === 1) {
    return (
      <FeaturedDisplay
        pageSection={props}
        styleTree={featuredDisplayStyleTree}
      />
    )
  }
  if (pageSectionInfo.topicCount > 1) {
    return (
      <FeaturedListDisplay
        pageSection={props}
        styleTree={featuredListDisplayStyleTree}
      />
    )
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}
