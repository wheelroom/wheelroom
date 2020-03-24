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
import { Featured } from './featured/featured'
import { FeaturedList } from './featured-list/featured-list'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.topicCount === 1) {
    return <Featured pageSection={props} />
  }
  if (info.topicCount > 1) {
    return <FeaturedList pageSection={props} />
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}
