/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Footer
 *
 */

import React from 'react'
import { getWheel } from '@wheelroom/core'
import { NavigationFooter } from './footer/navigation-footer'
import { NavigationSectionModel } from './model'

export const NavigationSectionFooterVar = (props: NavigationSectionModel) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'navigationSection',
    sectionWheels: props.sectionWheels,
    variation: 'footer',
  })
  if (!wheel) {
    return null
  }
  return (
    <NavigationFooter
      globals={props.globals}
      siteMetaData={props.siteMetadata}
      containerStyle="container"
      navigation={props.navigation || []}
      wheel={wheel}
    />
  )
}
