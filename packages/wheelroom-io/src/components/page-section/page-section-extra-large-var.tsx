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
import { NotImplemented } from '../../lib/not-implemented'
import { Navigation } from '../navigation'

export const PageSectionExtraLargeVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasNavigation && info.hasTopic && !info.hasText) {
    return <Hero topic={props.topics[0]} navigation={{ ...props.navigation }} />
  }
  if (info.hasNavigation && !info.hasTopic && !info.hasText) {
    return <Navigation navigation={{ ...props.navigation }} />
  }

  return <NotImplemented {...props} />
}
