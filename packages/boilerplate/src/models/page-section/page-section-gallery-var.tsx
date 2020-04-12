/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Gallery
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { PageSectionGallery } from '../../wheelroom/wheels/page-section/gallery/page-section-gallery'
import { pageSectionGalleryTreeStyle } from '../../wheelroom/wheels/page-section/gallery/page-section-gallery-preset'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/topic/topic-preset'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  // const pageSectionInfo = getPageSectionInfo(props)

  // const treeStyle = deepMerge(
  //   { topic: topicPreset },
  //   { ...pageSectionGalleryTreeStyle }
  // )

  // if (pageSectionInfo.hasTopic) {
  //   return (
  //     <PageSectionGallery
  //       containerStyle="fluid"
  //       pageSection={props}
  //       treeStyle={treeStyle}
  //     />
  //   )
  // }
  return <NotImplemented {...props} />
}
