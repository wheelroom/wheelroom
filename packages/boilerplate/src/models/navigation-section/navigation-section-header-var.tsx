/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Header
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { navFooterPreset } from '../../wheelroom/wheels/section/navigation-footer/presets/nav-footer-preset'
import { navHeaderPreset } from '../../wheelroom/wheels/section/navigation-header/presets/nav-header-preset'
import { NavigationProps } from '../navigation/navigation'
import { PageSectionNavigationHeader } from '../../wheelroom/wheels/section/navigation-header/nav-header'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { topicPreset } from '../../wheelroom/wheels/model/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'

export const NavigationSectionHeaderVar = (props: NavigationProps) => {
  const pageSectionInfo = getPageSectionInfo(props)

  const wheelHeader: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelHeader.style = deepMerge([
    { topic: topicPreset },
    navHeaderPreset,
    getSectionStyle('navigation').header,
  ])

  const wheelFooter: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheelFooter.style = deepMerge([
    { topic: topicPreset },
    navFooterPreset,
    getSectionStyle('navigation').footer,
  ])
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds}
      pageSectionProps={props}
    >
      <PageSectionNavigationHeader
        hideThemeSwitchButton={false}
        pageSection={props}
        wheel={wheelHeader}
        containerStyle="container"
        //useLogoElement={<SvgAirplay ncss={{ color: 'blue', w: '50px' }} wheel={wheelHeader} />}
      />
    </ScrollSpy>
  )
}
