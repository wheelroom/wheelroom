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
  if (info.hasNavigation && info.hasTopic && info.hasAction && !info.hasText) {
    const navigationGroup = props.navigation
    const pages = navigationGroup.navigationGroup[0].pages
    return (
      <Hero topic={props.topics[0]} pages={pages} action={props.actions[0]} />
    )
  }
  if (info.hasNavigation && !info.hasTopic && !info.hasText) {
    const navigationGroup = props.navigation
    const pages = navigationGroup.navigationGroup[0].pages
    return <Navigation pages={pages} action={props.actions[0]} />
  }

  return <NotImplemented {...props} />
}
