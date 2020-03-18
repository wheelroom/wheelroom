/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured List
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { FeaturedList } from './featured-list/featured-list'

export const PageSectionFeaturedListVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasTopic) {
    return <FeaturedList info={info} topics={props.topics} />
  }
  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}
