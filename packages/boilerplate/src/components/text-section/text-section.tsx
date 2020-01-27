/**
 * Component
 *
 * Component type: textSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../sections/section-props'
import { TextSectionSingleVar } from './text-section-single-var'

const componentList = {
  ['single']: TextSectionSingleVar,
}

export interface TextSectionProps extends SectionProps {
  /** Gatsby fetched data */
  text: {
    json: any
  }
  __typename: string
  title: string
}

export const TextSection = (props: TextSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
