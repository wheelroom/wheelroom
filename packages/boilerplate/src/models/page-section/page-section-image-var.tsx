/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Image
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { PageSectionImage } from '../../wheelroom/wheels/page-section/image/page-section-image'
import { pageSectionImagePreset } from '../../wheelroom/wheels/page-section/image/page-section-image-preset'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/topic/topic-preset'

export const PageSectionImageVar = (props: PageSectionProps) => {
  // const pageSectionInfo = getPageSectionInfo(props)

  // const treeStyle = deepMerge(
  //   { topic: topicPreset },
  //   { ...pageSectionImagePreset }
  // )

  // if (pageSectionInfo.hasTopic) {
  //   return (
  //     <PageSectionImage
  //       containerStyle="fluid"
  //       pageSection={props}
  //       treeStyle={treeStyle}
  //     />
  //   )
  // }
  return <NotImplemented {...props} />
}
