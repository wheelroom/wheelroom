/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Text
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { PageSectionTextTree } from '../../wheelroom/trees/page-section/text/page-section-text-tree'
import { pageSectionTextTreeStyle } from '../../wheelroom/trees/page-section/text/page-section-text-tree-style'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'

export const PageSectionTextVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  addCssLabels('psText', pageSectionTextTreeStyle)

  if (pageSectionInfo.hasText) {
    return (
      <PageSectionTextTree
        pageSection={props}
        treeStyle={pageSectionTextTreeStyle}
      />
    )
  }
  return <NotImplemented {...props} />
}
