/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Navigation
 *
 */

import React from 'react'
import { elementStyles } from '../../themes/yosemite/element-styles'
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
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { navHeaderStyle } from '../../themes/yosemite/page-section/nav-header-style'
import { topicPreset } from '../../wheelroom/wheels/topic/presets/topic-preset'
import { navFooterStyle } from '../../themes/yosemite/page-section/nav-footer-style'

export const PageSectionNavigationVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const headerStyle = deepMerge([
    { topic: topicPreset },
    navHeaderPreset,
    navHeaderStyle,
  ])

  const wheelHeader: Wheel = {
    style: headerStyle,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
    styledSystemConfig,
  }

  const footerStyle = deepMerge([
    { topic: topicPreset },
    navFooterPreset,
    navFooterStyle,
  ])

  const wheelFooter: Wheel = {
    style: footerStyle,
    elementStyles,
    theme: props.activeThemeId === 'light' ? yosemiteLight : yosemiteDark,
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
