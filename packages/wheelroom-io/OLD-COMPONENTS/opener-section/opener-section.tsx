/**
 * Component
 *
 * Component type: openerSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { OpenerSectionNavigationOnlyVar } from './opener-section-navigation-only-var'
import { OpenerSectionHomeVar } from './opener-section-home-page-var'

const componentList = {
  ['navigation only']: OpenerSectionNavigationOnlyVar,
  ['home page']: OpenerSectionHomeVar,
}

export interface OpenerSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  variation: string
  navigation: any
  boxBackgroundColor: string
  heading: string
  image: FluidImage
  abstract: {
    abstract: string
  }
}

export const OpenerSection = (props: OpenerSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
