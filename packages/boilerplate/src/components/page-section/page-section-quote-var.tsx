/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Quote
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { QuoteDisplay } from '../../core/displays/quote-display/quote-display'

export const PageSectionQuoteVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <QuoteDisplay pageSection={props} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
