/**
 * Component
 *
 * Component type: textSection
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { SectionProps } from '../../../page-template/section-props'
import { TextProps } from '../text/text'
import { TextSectionTextVar } from './text-section-text-var'

const componentList = {
  ['text']: TextSectionTextVar,
}

export interface TextSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  eventId?: string
  text?: TextProps
  variation?: string
}

export const TextSection = (props: TextSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
