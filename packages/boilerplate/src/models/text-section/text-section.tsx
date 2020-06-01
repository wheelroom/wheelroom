/**
 * Component
 *
 * Component type: textSection
 *
 */

import React from 'react'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { SectionProps } from '../../wheelroom/sections/section-props'
import { TextSectionTextVar } from './text-section-text-var'

const componentList = {
  ['text']: TextSectionTextVar,
}

export interface TextSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  variation?: string
  text?: any
  eventId?: string
}

export const TextSection = (props: TextSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
