/**
 * Component
 *
 * Component type: textSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { FluidImage } from '../../views/image/image'
import { TextSectionSingleVar } from './text-section-single-var'

const componentList = {
  ['single']: TextSectionSingleVar,
}

export interface TextSectionProps extends SectionProps {
  /** Gatsby fetched data */
  text: {
    text: string
  }
  __typename: string
  title: string
}

export const TextSection = (props: TextSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
