/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Navigation
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { NavigationFooterDisplay } from '../../core/displays/navigation-footer-display'
import { NavigationHeaderDisplay } from '../../core/displays/navigation-header-display'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasNavigation && info.index === 0) {
    return <NavigationHeaderDisplay pageSection={props} />
  }

  if (info.hasNavigation && info.index === info.sectionCount - 1) {
    return <NavigationFooterDisplay pageSection={props} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
