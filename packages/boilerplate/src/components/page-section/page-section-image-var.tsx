/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Image
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { ImageDisplay } from '../../core/elements/displays/image-display'

export const PageSectionImageVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <ImageDisplay pageSection={props} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
