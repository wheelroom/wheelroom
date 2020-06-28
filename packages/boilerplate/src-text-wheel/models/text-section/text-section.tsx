/**
 * Component
 *
 * Component type: textSection
 *
 */

import React from 'react'
import { getVariation } from '../../../src-core'
import { TextSectionTextVar } from './text-section-text-var'
import { TextSectionModelProps } from './model-props'

const componentList = {
  ['text']: TextSectionTextVar,
}

export const TextSection = (props: TextSectionModelProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
