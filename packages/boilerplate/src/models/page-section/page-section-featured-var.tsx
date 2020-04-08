/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { pageSectionFeaturedTreeStyle } from '../../wheelroom/trees/page-section/topic/page-section-featured-tree-style'
import { PageSectionTopicTree } from '../../wheelroom/trees/page-section/topic/page-section-topic-tree'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicTreeStyle } from '../../wheelroom/trees/topic/topic-tree-style'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Three things happen here:
  // - Use default topic styling
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge(
    { topic: topicTreeStyle },
    pageSectionFeaturedTreeStyle
  )

  addCssLabels('psFeatured', treeStyle)

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
        treeStyle={treeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
