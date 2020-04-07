/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Image
 *
 */

import React from 'react'
import { PageSectionProps } from '../page-section'
import { NotImplemented } from '../../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../../core/lib/get-page-section-info'
import { ImageTree } from '../../../core/trees/page-section/image-tree'
import { imageTreeStyle } from './image-tree-style'

export const PageSectionImageVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <ImageTree pageSection={props} treeStyle={imageTreeStyle} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
