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
import {
  navigationHeaderTreeStyle,
  PageSectionNavigationHeaderTreeStyle,
} from '../../wheelroom/trees/page-section/navigation/header/page-section-navigation-header-tree-style'
import {
  navigationFooterTreeStyle,
  PageSectionNavigationFooterTreeStyle,
} from '../../wheelroom/trees/page-section/navigation/footer/page-section-navigation-footer-tree-style'
import { PageSectionNavigationHeaderTree } from '../../wheelroom/trees/page-section/navigation/header/page-section-navigation-header-tree'
import { PageSectionNavigationFooterTree } from '../../wheelroom/trees/page-section/navigation/footer/page-section-navigation-footer-tree'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)

  // Two things happen here:
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeHeaderStyle = deepMerge(
    {} as PageSectionNavigationHeaderTreeStyle,
    navigationHeaderTreeStyle
  )
  const treeFooterStyle = deepMerge(
    {} as PageSectionNavigationFooterTreeStyle,
    navigationFooterTreeStyle
  )

  addCssLabels('navigation-header', treeHeaderStyle)
  addCssLabels('navigation-footer', treeFooterStyle)

  if (info.hasNavigation && info.index === 0) {
    return (
      <PageSectionNavigationHeaderTree
        pageSection={props}
        treeStyle={treeHeaderStyle}
      />
    )
  }

  if (info.hasNavigation && info.index === info.sectionCount - 1) {
    return (
      <PageSectionNavigationFooterTree
        pageSection={props}
        treeStyle={treeFooterStyle}
      />
    )
  }

  return <NotImplemented {...props} />
}
