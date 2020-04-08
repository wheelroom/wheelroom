/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Video
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { PageSectionVideoTree } from '../../wheelroom/trees/page-section/video/page-section-video-tree'
import { videoTreeStyle } from '../../wheelroom/trees/page-section/video/page-section-video-tree-style'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  const treeStyle = deepMerge({}, videoTreeStyle)
  addCssLabels('psText', treeStyle)

  if (pageSectionInfo.hasTopic) {
    return <PageSectionVideoTree pageSection={props} treeStyle={treeStyle} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
