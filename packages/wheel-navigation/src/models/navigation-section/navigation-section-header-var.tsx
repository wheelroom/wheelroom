/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Header
 *
 */

import React from 'react'
import { getWheel } from '@wheelroom/core'
import { NavigationHeader } from './header/navigation-header'
import { NavigationSectionModel } from './model'

export const NavigationSectionHeaderVar = (props: NavigationSectionModel) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'navigationSection',
    sectionWheels: props.sectionWheels,
    variation: 'header',
  })
  if (!wheel) {
    return null
  }
  return (
    <NavigationHeader
      containerStyle="container"
      defaultThemeId={props.sectionWheels.defaultThemeId}
      globals={props.globals}
      hideThemeButton={false}
      navigation={props.navigation || []}
      themes={props.sectionWheels.themes}
      useLogoElement={undefined}
      wheel={wheel}
      // useLogoElement={
      //   <SvgAirplay ncss={{ color: 'blue', w: '50px' }} wheel={wheel} />
      // }
    />
  )
}
