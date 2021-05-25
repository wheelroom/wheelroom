/**
 * Component
 *
 * Component type: textSection
 *
 */

import React from 'react'
import { getVariation } from '@wheelroom/core'
import { TextSectionTextVar } from './text-section-text-var'
import { TextSectionModel } from './model'

const componentList = {
  ['text']: TextSectionTextVar,
}

export const TextSection = (props: TextSectionModel) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
