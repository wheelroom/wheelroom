/**
 * Component
 *
 * Component type: customSection
 *
 */

import React from 'react'
import { getVariation } from '@wheelroom/core'
import { CustomSectionLargeVar } from './custom-section-large-var'
import { CustomSectionSmallVar } from './custom-section-small-var'
import { CustomSectionModel } from './model'

const componentList = {
  large: CustomSectionLargeVar,
  small: CustomSectionSmallVar,
}

export const CustomSection = (props: CustomSectionModel) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
