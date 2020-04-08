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

export const PageSectionImageVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionImageTree
        pageSection={props}
        treeStyle={addCssLabels('psImage', pageSectionImageTreeStyle)}
      />
    )
  }
  return <NotImplemented {...props} />
}
