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
import { pageSectionQuoteTreeStyle } from '../../wheelroom/trees/page-section/quote/page-section-quote-tree-style'
import { PageSectionTopicTree } from '../../wheelroom/trees/page-section/topic/page-section-topic-tree'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'

export const PageSectionQuoteVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  addCssLabels('psQuote', pageSectionQuoteTreeStyle)

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
        treeStyle={pageSectionQuoteTreeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
