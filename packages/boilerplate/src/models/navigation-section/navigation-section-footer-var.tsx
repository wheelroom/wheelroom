/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Footer
 *
 */

import React from 'react'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { getWheel, getSectionStyle } from '../../themes/themes'
import { navFooterPreset } from '../../wheelroom/wheels/section/navigation-footer/presets/navigation-footer-preset'
import { NavigationFooter } from '../../wheelroom/wheels/section/navigation-footer/navigation-footer'
import { NavigationSectionProps } from './navigation-section'
import { ScrollSpy } from '../../wheelroom/lib/scroll-spy'
import { ThemeId } from '../../admin-resources/theme-info'

export const NavigationSectionFooterVar = (props: NavigationSectionProps) => {
  const wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    navFooterPreset,
    getSectionStyle('navigation').footer,
  ])
  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <NavigationFooter
        globals={props.globals}
        siteMetaData={props.siteMetadata}
        containerStyle="container"
        navigation={props.navigation || []}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
