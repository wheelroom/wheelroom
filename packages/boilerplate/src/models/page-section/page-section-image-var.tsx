/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Image
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { ImageTree } from '../../core/model-views/page-section/image-tree'
import { imageDisplayStyleTree } from '../../styles/style-trees/image-display-style-tree'

export const PageSectionImageVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return (
      <ImageTree pageSection={props} treeStyle={imageDisplayStyleTree} />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
