/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Quote
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { pageSectionQuoteTreeStyle } from '../../wheelroom/trees/page-section/topic/page-section-quote-tree-style'
import { PageSectionTopicTree } from '../../wheelroom/trees/page-section/topic/page-section-topic-tree'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicTreeStyle } from '../../wheelroom/trees/topic/topic-tree-style'

export const PageSectionQuoteVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Three things happen here:
  // - Use default topic styling
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge(
    { topic: topicTreeStyle },
    pageSectionQuoteTreeStyle
  )

  addCssLabels('psQuote', treeStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionTopicTree
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          useHeadingElement: 'p',
          useAbstractElement: 'blockquote',
        }}
        containerStyle="maxWidth"
        pageSection={props}
        treeStyle={treeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
