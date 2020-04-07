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
import { NavigationFooterTree } from '../../core/model-views/page-section/navigation-footer-display'
import { NavigationHeaderTree } from '../../core/model-views/page-section/navigation-header-display'
import { navigationHeaderDisplayStyleTree } from '../../styles/style-trees/navigation-header-display-style-tree'
import { navigationFooterDisplayStyleTree } from '../../styles/style-trees/navigation-footer-display-style-tree'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasNavigation && info.index === 0) {
    return (
      <NavigationHeaderTree
        pageSection={props}
        treeStyle={navigationHeaderDisplayStyleTree}
      />
    )
  }

  if (info.hasNavigation && info.index === info.sectionCount - 1) {
    return (
      <NavigationFooterTree
        pageSection={props}
        treeStyle={navigationFooterDisplayStyleTree}
      />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
