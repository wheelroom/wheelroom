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

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheel: Wheel = {
    style: navHeaderPreset,
    elementPresets,
    theme: yosemiteDark,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasNavigation && pageSectionInfo.index === 0) {
    return <PageSectionNavigationHeader pageSection={props} wheel={wheel} />
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}
