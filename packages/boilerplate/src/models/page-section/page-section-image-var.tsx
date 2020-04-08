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
import { PageSectionImageTree } from '../../wheelroom/trees/page-section/image/page-section-image-tree'
import { pageSectionImageTreeStyle } from '../../wheelroom/trees/page-section/image/page-section-image-tree-style'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'

export const PageSectionImageVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  const treeStyle = deepMerge({}, pageSectionImageTreeStyle)
  addCssLabels('psImage', treeStyle)

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionImageTree
        pageSection={props}
        treeStyle={pageSectionImageTreeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
