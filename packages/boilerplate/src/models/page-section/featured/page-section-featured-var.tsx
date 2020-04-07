/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { PageSectionProps } from '../page-section'
import { NotImplemented } from '../../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../../core/lib/get-page-section-info'
import { FeaturedTree } from '../../../core/model-views/page-section/featured-tree'
import { FeaturedListTree } from '../../../core/model-views/page-section/featured-list-tree'
import { featuredDisplayStyleTree } from './featured-tree-style'
import { featuredListDisplayStyleTree } from './featured-list-tree-style'

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
