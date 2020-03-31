/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { FeaturedDisplay } from '../../core/elements/displays/featured-display'
import { FeaturedListDisplay } from '../../core/elements/displays/featured-list-display'

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
