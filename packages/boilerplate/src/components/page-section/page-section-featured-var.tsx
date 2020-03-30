/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { FeaturedDisplay } from '../../core/displays/featured-display/featured-display'
import { FeaturedListDisplay } from '../../core/displays/featured-display/featured-list-display'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.topicCount === 1) {
    return <FeaturedDisplay pageSection={props} />
  }
  if (pageSectionInfo.topicCount > 1) {
    return <FeaturedListDisplay pageSection={props} />
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}
