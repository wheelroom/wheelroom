/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Headline
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { pageSectionHeadlineTreeStyle } from '../../wheelroom/trees/page-section/headline/page-section-headline-tree-style'
import { PageSectionTopicTree } from '../../wheelroom/trees/page-section/topic/page-section-topic-tree'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'

export const PageSectionHeadlineVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  const treeStyle = deepMerge({}, pageSectionHeadlineTreeStyle)
  addCssLabels('psHeadline', treeStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionTopicTree
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          useHeadingElement: pageSectionInfo.index <= 1 ? 'h1' : 'h2',
        }}
        containerStyle="maxWidth"
        pageSection={props}
        treeStyle={treeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
