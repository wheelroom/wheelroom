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
import { Wheel } from '../../wheelroom/wheels/types'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'

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

  const wheel: Wheel = {
    style: {},
    elementPresets,
    theme: yosemiteDark,
    styledSystemConfig,
  }

  return <NotImplemented pageSection={props} wheel={wheel} />
}
