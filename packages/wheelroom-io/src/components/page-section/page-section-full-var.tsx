/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Full
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Hero } from './extra-large/hero'
import { Navigation } from '../navigation/navigation'

export const PageSectionFullVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (
    !info.hasText &&
    info.hasAction &&
    info.hasNavigation &&
    info.hasTopic &&
    info.navigationSegmentCount > 0
  ) {
    const segments = props.navigation.segments
    return (
      <Hero
        topic={props.topics[0]}
        segments={segments}
        action={props.actions[0]}
      />
    )
  }
  if (
    !info.hasText &&
    !info.hasTopic &&
    info.hasAction &&
    info.hasNavigation &&
    info.navigationSegmentCount > 0
  ) {
    const segments = props.navigation.segments
    return <Navigation segments={segments} action={props.actions[0]} />
  }

  return <NotImplemented {...props} />
}
