/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Video
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { PageSectionVideoTree } from '../../wheelroom/trees/page-section/video/page-section-video-tree'
import { videoTreeStyle } from '../../wheelroom/trees/page-section/video/page-section-video-tree-style'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { topicTreeStyle } from '../../wheelroom/trees/topic/topic-tree-style'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Three things happen here:
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  // - Apply fixedWidthWrapperStyle
  const treeStyle = deepMerge(
    { topic: topicTreeStyle },
    {
      ...videoTreeStyle,
    }
  )

  addCssLabels('video', treeStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionVideoTree
        containerStyle="fluid"
        pageSection={props}
        treeStyle={treeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
