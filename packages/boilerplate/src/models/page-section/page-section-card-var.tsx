/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { cardTreeStyle } from '../../core/trees/page-section/card/page-section-card-tree-style'
import { PageSectionTopicTree } from '../../core/trees/page-section/topic/page-section-topic-tree'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    if (!pageSectionInfo.topicOptions.hideAction) {
      Object.assign(
        cardTreeStyle.topic.wrapper,
        cardTreeStyle.conditional.topicWrapperShadow
      )
    }

    return (
      <PageSectionTopicTree
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: true,
          pageSectionInfo,
        }}
        containerStyle="maxWidth"
        pageSection={props}
        treeStyle={cardTreeStyle}
      />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
