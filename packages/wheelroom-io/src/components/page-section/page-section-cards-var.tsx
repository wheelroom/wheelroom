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
    return <Cards topic={props.topics[0]} />
  }
  /** If your variation doesn't exist Wheelroom will display this notification */
  return <NotImplemented {...props} />
}
