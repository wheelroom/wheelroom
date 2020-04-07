/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Block
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { pageSectionBlockTreeStyle } from '../../core/trees/page-section/block/page-section-block-tree-style'
import { PageSectionTopicTree } from '../../core/trees/page-section/topic/page-section-topic-tree'

export const PageSectionBlockVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionTopicTree
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: false,
          pageSectionInfo,
        }}
        containerStyle="maxWidth"
        pageSection={props}
        treeStyle={pageSectionBlockTreeStyle}
      />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
