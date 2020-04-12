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
import { PageSectionNavigationHeader } from '../../wheelroom/wheels/page-section/navigation-header/nav-header'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { navHeaderPreset } from '../../wheelroom/wheels/page-section/navigation-header/presets/nav-header-preset'
import { navFooterPreset } from '../../wheelroom/wheels/page-section/navigation-footer/presets/nav-footer-preset'
import { PageSectionNavigationFooter } from '../../wheelroom/wheels/page-section/navigation-footer/nav-footer'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheelHeader: Wheel = {
    style: navHeaderPreset,
    elementPresets,
    theme: yosemiteDark,
    styledSystemConfig,
  }
  const wheelFooter: Wheel = {
    style: navFooterPreset,
    elementPresets,
    theme: yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasNavigation && pageSectionInfo.index < 2) {
    return (
      <PageSectionNavigationHeader pageSection={props} wheel={wheelHeader} />
    )
  }
  if (
    pageSectionInfo.hasNavigation &&
    pageSectionInfo.index > pageSectionInfo.sectionCount - 2
  ) {
    return (
      <PageSectionNavigationFooter pageSection={props} wheel={wheelFooter} />
    )
  }

  return <NotImplemented pageSection={props} wheel={wheelHeader} />
}
