/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Block
 *
 */

import React from 'react'
import { PageSectionProps } from '../page-section'
import { NotImplemented } from '../../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../../core/lib/get-page-section-info'
import { BlockTree } from '../../../core/trees/page-section/block-tree'
import { blockTreeStyle } from './block-tree-style'

export const PageSectionBlockVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <BlockTree pageSection={props} treeStyle={blockTreeStyle} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
