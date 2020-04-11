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
import { PageSectionGalleryPreset } from '../../wheelroom/presets/page-section/gallery/page-section-gallery-preset'
import { pageSectionGalleryTreeStyle } from '../../wheelroom/presets/page-section/gallery/page-section-gallery-preset-style'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicTreeStyle } from '../../wheelroom/presets/topic/topic-preset-style'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Three things happen here:
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge(
    { topic: topicTreeStyle },
    { ...pageSectionGalleryTreeStyle }
  )

  addCssLabels('gallery', treeStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionGalleryPreset
        containerStyle="fluid"
        pageSection={props}
        treeStyle={treeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
