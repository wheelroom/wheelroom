/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Header
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { navHeaderPreset } from '../../wheelroom/wheels/section/navigation-header/presets/nav-header-preset'
import { NavigationHeader } from '../../wheelroom/wheels/section/navigation-header/nav-header'
import { NavigationSectionProps } from './navigation-section'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'
import { Wheel } from '../../wheelroom/wheels/types'

export const NavigationSectionHeaderVar = (props: NavigationSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    navHeaderPreset,
    getSectionStyle('navigation').header,
  ])
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <NavigationHeader
        globals={props.globals}
        containerStyle="container"
        navigation={props.navigation || []}
        hideThemeSwitchButton={false}
        useLogoElement={undefined}
        wheel={wheel}
        //useLogoElement={<SvgAirplay ncss={{ color: 'blue', w: '50px' }} wheel={wheelHeader} />}
      />
    </ScrollSpy>
  )
}
