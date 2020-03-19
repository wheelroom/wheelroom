/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Images
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'

export const PageSectionImagesVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  console.log('Not implemented', info)

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
