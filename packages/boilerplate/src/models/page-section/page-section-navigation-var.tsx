/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Navigation
 *
 */

import React from 'react'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { navFooterPreset } from '../../wheelroom/wheels/page-section/navigation-footer/presets/nav-footer-preset'
import { navHeaderPreset } from '../../wheelroom/wheels/page-section/navigation-header/presets/nav-header-preset'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { PageSectionNavigationFooter } from '../../wheelroom/wheels/page-section/navigation-footer/nav-footer'
import { PageSectionNavigationHeader } from '../../wheelroom/wheels/page-section/navigation-header/nav-header'
import { PageSectionProps } from './page-section'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { Wheel } from '../../wheelroom/wheels/types'
import { yosemiteDark } from '../../themes/yosemite/yosemite-dark'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheelHeader: Wheel = {
    style: navHeaderPreset,
    elementPresets,
    theme: yosemiteLight,
    styledSystemConfig,
  }
  const wheelFooter: Wheel = {
    style: navFooterPreset,
    elementPresets,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  console.log(JSON.stringify(wheelHeader.style, null, 2))

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
