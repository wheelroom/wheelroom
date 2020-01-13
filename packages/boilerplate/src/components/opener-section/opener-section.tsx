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
import { OpenerSectionHomeOpenerVar } from './opener-section-home-opener-var'
import { OpenerSectionPageOpenerVar } from './opener-section-page-opener-var'

const componentList = {
  ['home opener']: OpenerSectionHomeOpenerVar,
  ['page opener']: OpenerSectionPageOpenerVar,
}

export interface OpenerSectionProps extends SectionProps {
  /** Gatsby fetched data */
  boxBackgroundColor: string
  heading: string
  image: FluidImage
  infoText: {
    infoText: string
  }
  mainNavigation: any
  variation: string
  __typename: string
  title: string
}

export const OpenerSection = (props: OpenerSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
