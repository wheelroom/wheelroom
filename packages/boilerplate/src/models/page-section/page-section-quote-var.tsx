/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Quote
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { pageSectionQuoteTreeStyle } from '../../core/trees/page-section/quote/page-section-quote-tree-style'
import { PageSectionTopicTree } from '../../core/trees/page-section/topic/page-section-topic-tree'

export const PageSectionQuoteVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
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

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
