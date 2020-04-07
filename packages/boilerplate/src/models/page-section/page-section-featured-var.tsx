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
import { FeaturedTree } from '../../core/model-views/page-section/featured-display'
import { FeaturedListTree } from '../../core/model-views/page-section/featured-list-display'
import { featuredDisplayStyleTree } from '../../styles/style-trees/featured-display-style-tree'
import { featuredListDisplayStyleTree } from '../../styles/style-trees/featured-list-display-style-tree'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.topicCount === 1) {
    return (
      <FeaturedTree
        pageSection={props}
        treeStyle={featuredDisplayStyleTree}
      />
    )
  }
  if (pageSectionInfo.topicCount > 1) {
    return (
      <FeaturedListTree
        pageSection={props}
        treeStyle={featuredListDisplayStyleTree}
      />
    )
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}
