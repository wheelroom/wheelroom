/**
 * Component
 *
 * Component type: textSection
 *
 */

import React from 'react'
import { getVariation } from '../../../src-core'
import { TextSectionTextVar } from './text-section-text-var'
import { TextSectionProps } from './model-types'

const componentList = {
  ['text']: TextSectionTextVar,
}

export const TextSection = (props: TextSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
