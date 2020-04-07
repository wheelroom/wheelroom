/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import { PageSectionProps } from '../page-section'
import { NotImplemented } from '../../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../../core/lib/get-page-section-info'
import { PageSectionCardTree } from '../../../core/trees/page-section/page-section-card-tree'
import { cardTreeStyle } from './card-tree-style'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    if (!pageSectionInfo.topicOptions.hideAction) {
      Object.assign(
        cardTreeStyle.topic.wrapper,
        cardTreeStyle.conditional.topicWrapperShadow
      )
    }
  
    return <PageSectionCardTree pageSection={props} treeStyle={cardTreeStyle} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
