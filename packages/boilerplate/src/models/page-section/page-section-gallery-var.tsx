/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Gallery
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { PageSectionGalleryTree } from '../../core/trees/page-section/gallery/page-section-gallery-tree'
import { pageSectionGalleryTreeStyle } from '../../core/trees/page-section/gallery/page-section-gallery-tree-style'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionGalleryTree
        pageSection={props}
        treeStyle={pageSectionGalleryTreeStyle}
      />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
