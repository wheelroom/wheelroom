/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Card
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { CardDisplay } from './card-display/card-display'

export const PageSectionCardVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <CardDisplay pageSection={props} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
