/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Footer
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { NavigationFooter } from './footer/navigation-footer'
import { NavigationSectionModel } from './model'

export const NavigationSectionFooterVar = (props: NavigationSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'navigationSection',
    sectionWheels: props.sectionWheels,
    variation: 'footer',
  })

  if (!sectionWheel) {
    return null
  }
  const { data, wheel } = sectionWheel
  return (
    <NavigationFooter
      globals={props.globals}
      siteMetaData={props.siteMetadata}
      hideLegalFooter={data.hideLegalFooter}
      containerStyle="container"
      navigation={props.navigation || []}
      wheel={wheel}
    />
  )
}
