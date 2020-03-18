/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Navigation
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { Navigation } from '../navigation/navigation'
import { getPageSectionInfo } from '../../lib/get-page-section-info'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
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

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
