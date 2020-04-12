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
import { PageSectionVideo } from '../../wheelroom/wheels/page-section/video/page-section-video'
import { videoTreeStyle } from '../../wheelroom/wheels/page-section/video/page-section-video-preset'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { topicPreset } from '../../wheelroom/wheels/topic/topic-preset'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  // const pageSectionInfo = getPageSectionInfo(props)

  // const treeStyle = deepMerge(
  //   { topic: topicPreset },
  //   {
  //     ...videoTreeStyle,
  //   }
  // )

  // if (pageSectionInfo.hasTopic) {
  //   return (
  //     <PageSectionVideo
  //       containerStyle="fluid"
  //       pageSection={props}
  //       treeStyle={treeStyle}
  //     />
  //   )
  // }
  return <NotImplemented {...props} />
}
