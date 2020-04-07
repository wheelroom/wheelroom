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
import { featuredTreeStyle } from '../../core/trees/page-section/featured/page-section-featured-tree-style'
import { PageSectionTopicTree } from '../../core/trees/page-section/topic/page-section-topic-tree'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.topicCount === 1) {
    return (
      <PageSectionTopicTree
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: true,
          pageSectionInfo,
          useHeadingElement: 'h3',
        }}
        containerStyle="maxWidth"
        pageSection={props}
        treeStyle={featuredTreeStyle}
      />
    )
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}
