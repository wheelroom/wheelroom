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
import { deepMerge } from '../../wheelroom/lib/deep-merge'

export const PageSectionTextVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  // Two things happen here:
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeStyle = deepMerge({}, pageSectionTextTreeStyle)

  addCssLabels('text', treeStyle)

  if (pageSectionInfo.hasText) {
    return <PageSectionTextTree pageSection={props} treeStyle={treeStyle} />
  }
  return <NotImplemented {...props} />
}
