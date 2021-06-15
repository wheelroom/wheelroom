/**
 * Component variation
 *
 * Component type: navigationSection
 * Variation: Sitemap
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { NavigationSitemap } from './sitemap/navigation-sitemap'
import { NavigationSectionModel } from './model'

export const NavigationSectionSitemapVar = (props: NavigationSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'navigationSection',
    sectionWheels: props.sectionWheels,
    variation: 'sitemap',
  })

  if (!sectionWheel) {
    return null
  }
  const { data, wheel } = sectionWheel
  return (
    <NavigationSitemap
      containerStyle="container"
      data={data}
      globals={props.globals}
      navigation={props.navigation || []}
      siteMetaData={props.siteMetadata}
      wheel={wheel}
    />
  )
}
