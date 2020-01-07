/**
 * Component
 *
 * Component type: globals
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { FluidImage } from '../../views/image/image'
import { SectionProps } from '../../sections/section-props'
import { GlobalsSingleVar } from './globals-single-var'

const componentList = {
  ['single']: GlobalsSingleVar,
}

export interface GlobalsProps extends SectionProps {
  /** Gatsby fetched data */
  addressLine1: string
  addressLine2: string
  emailAddress: string
  linkedinUrl: string
  phoneNumber: string
  siteAuthor: string
  siteDescription: string
  siteHeading: string
  siteKeywords: string[]
  siteTitle: string
  __typename: string
  title: string
}

export const Globals = (props: GlobalsProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
