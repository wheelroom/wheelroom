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
import { PageSectionText } from '../../wheelroom/wheels/page-section/text/page-section-text'
import { pageSectionTextTreeStyle } from '../../wheelroom/wheels/page-section/text/page-section-text-preset'
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
    return <PageSectionText pageSection={props} treeStyle={treeStyle} />
  }
  return <NotImplemented {...props} />
}
