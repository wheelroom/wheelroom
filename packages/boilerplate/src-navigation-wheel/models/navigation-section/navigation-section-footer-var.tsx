/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Footer
 *
 */

import React from 'react'
import { ScrollSpy } from '../../lib/scroll-spy'
import { getWheel } from '../../lib/get-wheel'
import { NavigationFooter } from './footer/navigation-footer'
import { NavigationSectionProps } from './model-types'

export const NavigationSectionFooterVar = (props: NavigationSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'navigation',
    sectionWheels: props.sectionWheels,
    variation: 'footer',
  })
  if (!wheel) {
    return null
  }
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
