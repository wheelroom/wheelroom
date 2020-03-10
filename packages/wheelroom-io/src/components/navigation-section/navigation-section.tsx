/**
 * Component
 *
 * Component type: navigationSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { NavigationSectionPaginabeginHomeVar } from './navigation-section-paginabegin-home-var'
import { NavigationSectionPaginabeginNormaalVar } from './navigation-section-paginabegin-normaal-var'
import { NavigationSectionPaginaeindeVar } from './navigation-section-paginaeinde-var'

const componentList = {
  ['Paginabegin home']: NavigationSectionPaginabeginHomeVar,
  ['Paginabegin normaal']: NavigationSectionPaginabeginNormaalVar,
  ['Paginaeinde']: NavigationSectionPaginaeindeVar,
}

export interface NavigationSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  topic: any
  navigation: any
}

export const NavigationSection = (props: NavigationSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
