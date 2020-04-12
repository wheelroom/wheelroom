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
  PageSectionNavigationHeaderPreset,
} from '../../wheelroom/wheels/page-section/navigation/header/page-section-navigation-header-preset'
import {
  navigationFooterTreeStyle,
  PageSectionNavigationFooterPreset,
} from '../../wheelroom/wheels/page-section/navigation/footer/page-section-navigation-footer-preset'
import { PageSectionNavigationHeader } from '../../wheelroom/wheels/page-section/navigation/header/page-section-navigation-header'
import { PageSectionNavigationFooter } from '../../wheelroom/wheels/page-section/navigation/footer/page-section-navigation-footer'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'
import { deepMerge } from '../../wheelroom/lib/deep-merge'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  // const info = getPageSectionInfo(props)

  // const treeHeaderStyle = deepMerge(
  //   {} as PageSectionNavigationHeaderPreset,
  //   navigationHeaderTreeStyle
  // )
  // const treeFooterStyle = deepMerge(
  //   {} as PageSectionNavigationFooterPreset,
  //   navigationFooterTreeStyle
  // )

  // if (info.hasNavigation && info.index === 0) {
  //   return (
  //     <PageSectionNavigationHeader
  //       pageSection={props}
  //       treeStyle={treeHeaderStyle}
  //     />
  //   )
  // }

  // if (info.hasNavigation && info.index === info.sectionCount - 1) {
  //   return (
  //     <PageSectionNavigationFooter
  //       pageSection={props}
  //       treeStyle={treeFooterStyle}
  //     />
  //   )
  // }

  return <NotImplemented {...props} />
}
