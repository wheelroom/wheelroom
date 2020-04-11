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
import { PageSectionVideoPreset } from '../../wheelroom/presets/page-section/video/page-section-video-preset'
import { videoTreeStyle } from '../../wheelroom/presets/page-section/video/page-section-video-preset-style'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { topicTreeStyle } from '../../wheelroom/presets/topic/topic-preset-style'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Three things happen here:
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge(
    { topic: topicTreeStyle },
    {
      ...videoTreeStyle,
    }
  )

  addCssLabels('video', treeStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionVideoPreset
        containerStyle="fluid"
        pageSection={props}
        treeStyle={treeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
