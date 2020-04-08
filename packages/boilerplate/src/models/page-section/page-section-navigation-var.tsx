/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Navigation
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { navigationHeaderTreeStyle } from '../../wheelroom/trees/page-section/navigation/header/page-section-navigation-header-tree-style'
import { navigationFooterTreeStyle } from '../../wheelroom/trees/page-section/navigation/footer/page-section-navigation-footer-tree-style'
import { PageSectionNavigationHeaderTree } from '../../wheelroom/trees/page-section/navigation/header/page-section-navigation-header-tree'
import { PageSectionNavigationFooterTree } from '../../wheelroom/trees/page-section/navigation/footer/page-section-navigation-footer-tree'
import { SvgStack } from '../../svg/figma'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasNavigation && info.index === 0) {
    navigationHeaderTreeStyle.menu.navLogo.container = {
      ...navigationHeaderTreeStyle.menu.navLogo.container,
      bg: 'azure',
    }

    return (
      <PageSectionNavigationHeaderTree
        pageSection={props}
        treeStyle={navigationHeaderTreeStyle}
        useLogoElement={<SvgStack ncss={{ w: '33px' }} />}
      />
    )
  }

  if (info.hasNavigation && info.index === info.sectionCount - 1) {
    return (
      <PageSectionNavigationFooterTree
        pageSection={props}
        treeStyle={navigationFooterTreeStyle}
      />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}
