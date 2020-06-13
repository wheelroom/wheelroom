/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Footer
 *
 */

import React from 'react'
import { deepMerge } from '../../lib/deep-merge'
import { getWheel, getSectionStyle } from '../../../themes/themes'
import { ScrollSpy } from '../../lib/scroll-spy'
import { ThemeId } from '../../../admin-resources/theme-info'
import { NavigationFooter } from './footer/navigation-footer'
import { navigationFooterPreset } from './footer/presets/navigation-footer-preset'
import { NavigationSectionProps } from './model-types'

export const NavigationSectionFooterVar = (props: NavigationSectionProps) => {
  const wheel = getWheel(props.activeThemeId as ThemeId)
  wheel.style = deepMerge([
    navigationFooterPreset,
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
