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
import { PageSectionGalleryTree } from '../../wheelroom/trees/page-section/gallery/page-section-gallery-tree'
import {
  pageSectionGalleryTreeStyle,
  PageSectionGalleryTreeStyle,
} from '../../wheelroom/trees/page-section/gallery/page-section-gallery-tree-style'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Two things happen here:
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge(
    {} as PageSectionGalleryTreeStyle,
    pageSectionGalleryTreeStyle
  )

  addCssLabels('psGallery', pageSectionGalleryTreeStyle)

  if (pageSectionInfo.hasTopic) {
    return <PageSectionGalleryTree pageSection={props} treeStyle={treeStyle} />
  }
  return <NotImplemented {...props} />
}
