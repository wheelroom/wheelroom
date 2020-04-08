/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Block
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { pageSectionBlockTreeStyle } from '../../wheelroom/trees/page-section/block/page-section-block-tree-style'
import { PageSectionTopicTree } from '../../wheelroom/trees/page-section/topic/page-section-topic-tree'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'

export const PageSectionBlockVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  const treeStyle = deepMerge({}, pageSectionBlockTreeStyle)
  addCssLabels('psBlock', treeStyle)

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
        treeStyle={treeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
