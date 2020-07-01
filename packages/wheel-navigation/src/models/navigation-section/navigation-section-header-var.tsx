/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Header
 *
 */

import React from 'react'
import { getWheel, getSectionOptions } from '@wheelroom/core'
import { NavigationHeader } from './header/navigation-header'
import { NavigationSectionModel } from './model'

export const NavigationSectionHeaderVar = (props: NavigationSectionModel) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'navigationSection',
    sectionWheels: props.sectionWheels,
    variation: 'header',
  })

  const options = getSectionOptions({
    themeId: props.activeThemeId,
    wheelId: 'navigationSection',
    sectionWheels: props.sectionWheels,
    variation: 'header',
  })

  if (!wheel) {
    return null
  }

  console.log('options', options.header)
  return (
    <NavigationHeader
      containerStyle="container"
      defaultThemeId={props.sectionWheels.defaultThemeId}
      globals={props.globals}
      hideThemeButton={options.header.hideThemeButton}
      navigation={props.navigation || []}
      themes={props.sectionWheels.themes}
      wheel={wheel}
      useLogoElement={options.header.useLogoElement}
    />
  )
}
