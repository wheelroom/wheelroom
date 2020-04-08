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
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  addCssLabels('psNavFoot', navigationHeaderTreeStyle)
  addCssLabels('psNavFoot', navigationFooterTreeStyle)

  if (info.hasNavigation && info.index === 0) {
    return (
      <PageSectionNavigationHeaderTree
        pageSection={props}
        treeStyle={navigationHeaderTreeStyle}
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

  return <NotImplemented {...props} />
}
