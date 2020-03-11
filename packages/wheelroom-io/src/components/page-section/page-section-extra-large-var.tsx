/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Extra-large
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Hero } from './extra-large/hero'
import { NotImplemented } from './not-implemented'

export const PageSectionExtraLargeVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasNavigation && info.hasTopic) {
    return <Hero topic={props.topics[0]} navigation={props.navigation}></Hero>
  }
  return <NotImplemented {...props} />
}
