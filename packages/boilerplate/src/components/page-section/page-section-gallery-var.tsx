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
import { GalleryDisplay } from '../../core/displays/gallery-display'
import { galleryDisplayStyleTree } from '../../styles/style-trees/gallery-display-style-tree'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return (
      <GalleryDisplay pageSection={props} styleTree={galleryDisplayStyleTree} />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
