/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Block
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { BlockDisplay } from '../../core/elements/displays/block-display'

export const PageSectionBlockVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <BlockDisplay pageSection={props} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
