/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Cards
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { NotImplemented } from '../../lib/not-implemented'
import { Cards } from './cards/cards'

export const PageSectionCardsVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasTopic) {
    return <Cards topics={props.topics} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
