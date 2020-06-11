/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Header
 *
 */

import React from 'react'
import { deepMerge } from '../../lib/deep-merge'
import { getWheel, getSectionStyle } from '../../../themes/themes'
import { navigationHeaderPreset } from '../../wheels/section/navigation-header/presets/navigation-header-preset'
import { NavigationHeader } from '../../wheels/section/navigation-header/navigation-header'
import { NavigationSectionProps } from './navigation-section'
import { ScrollSpy } from '../../lib/scroll-spy'
import { ThemeId } from '../../../admin-resources/theme-info'
import { Wheel } from '../../types/wheel'

export const NavigationSectionHeaderVar = (props: NavigationSectionProps) => {
  const wheel: Wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    navigationHeaderPreset,
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
        hideThemeButton={false}
        useLogoElement={undefined}
        wheel={wheel}
        // useLogoElement={
        //   <SvgAirplay ncss={{ color: 'blue', w: '50px' }} wheel={wheel} />
        // }
      />
    </ScrollSpy>
  )
}
