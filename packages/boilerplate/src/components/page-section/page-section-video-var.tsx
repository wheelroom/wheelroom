/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Video
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { VideoDisplay } from './video-display/video-display'

export const PageSectionVideoVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <VideoDisplay pageSection={props} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
