/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Header
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { NavigationHeader } from './header/navigation-header'
import { NavigationSectionModel } from './model'

export const NavigationSectionHeaderVar = (props: NavigationSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'navigationSection',
    sectionWheels: props.sectionWheels,
    variation: 'header',
  })
  if (!sectionWheel) {
    return null
  }
  const { data, wheel } = sectionWheel
  return (
    <NavigationHeader
      containerStyle="container"
      data={data}
      defaultThemeId={props.sectionWheels.defaultThemeId}
      globals={props.globals}
      navigation={props.navigation || []}
      themes={props.sectionWheels.themes}
      wheel={wheel}
    />
  )
}
