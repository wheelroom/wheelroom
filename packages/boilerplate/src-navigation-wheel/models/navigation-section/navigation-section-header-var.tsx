/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Header
 *
 */

import React from 'react'
import { getWheel } from '../../../src-core'
import { NavigationHeader } from './header/navigation-header'
import { NavigationSectionProps } from './model-types'

export const NavigationSectionHeaderVar = (props: NavigationSectionProps) => {
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
  )
}
