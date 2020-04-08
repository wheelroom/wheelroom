/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import {
  pageSectionCardTreeStyle,
  pageSectionCardTreeShadowStyle,
} from '../../wheelroom/trees/page-section/topic/page-section-card-tree-style'
import { PageSectionTopicTree } from '../../wheelroom/trees/page-section/topic/page-section-topic-tree'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicTreeStyle } from '../../wheelroom/trees/topic/topic-tree-style'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Three things happen here:
  // - Use default topic styling
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge(
    { topic: topicTreeStyle },
    pageSectionCardTreeStyle
  )
  const treeShadowStyle = deepMerge(
    { topic: topicTreeStyle },
    pageSectionCardTreeShadowStyle
  )

  addCssLabels('psCard', pageSectionCardTreeStyle)
  addCssLabels('psCard', pageSectionCardTreeShadowStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionTopicTree
        topicProps={{
          pageSectionActions: props.actions,
          fullTopicAsLink: true,
          pageSectionInfo,
        }}
        containerStyle="maxWidth"
        pageSection={props}
        treeStyle={
          pageSectionInfo.topicOptions.hideAction ? treeStyle : treeShadowStyle
        }
      />
    )
  }
  return <NotImplemented {...props} />
}
