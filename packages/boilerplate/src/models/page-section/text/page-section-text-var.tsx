/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Text
 *
 */

import React from 'react'
import { PageSectionProps } from '../page-section'
import { NotImplemented } from '../../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../../core/lib/get-page-section-info'
import { TextTree } from '../../../core/trees/page-section/text-tree'
import { textTreeStyle } from './text-tree-style'

export const PageSectionTextVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasText) {
    return <TextTree pageSection={props} treeStyle={textTreeStyle} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
