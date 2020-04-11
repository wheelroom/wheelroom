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
  PageSectionNavigationHeaderPresetStyle,
} from '../../wheelroom/presets/page-section/navigation/header/page-section-navigation-header-preset-style'
import {
  navigationFooterTreeStyle,
  PageSectionNavigationFooterPresetStyle,
} from '../../wheelroom/presets/page-section/navigation/footer/page-section-navigation-footer-preset-style'
import { PageSectionNavigationHeaderPreset } from '../../wheelroom/presets/page-section/navigation/header/page-section-navigation-header-preset'
import { PageSectionNavigationFooterPreset } from '../../wheelroom/presets/page-section/navigation/footer/page-section-navigation-footer-preset'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)

  // Two things happen here:
  // - Merge in styling for this variant
  // - Create a deep copy of the styling
  const treeHeaderStyle = deepMerge(
    {} as PageSectionNavigationHeaderPresetStyle,
    navigationHeaderTreeStyle
  )
  const treeFooterStyle = deepMerge(
    {} as PageSectionNavigationFooterPresetStyle,
    navigationFooterTreeStyle
  )

  addCssLabels('navigation-header', treeHeaderStyle)
  addCssLabels('navigation-footer', treeFooterStyle)

  if (info.hasNavigation && info.index === 0) {
    return (
      <PageSectionNavigationHeaderPreset
        pageSection={props}
        treeStyle={treeHeaderStyle}
      />
    )
  }

  if (info.hasNavigation && info.index === info.sectionCount - 1) {
    return (
      <PageSectionNavigationFooterPreset
        pageSection={props}
        treeStyle={treeFooterStyle}
      />
    )
  }

  return <NotImplemented {...props} />
}
