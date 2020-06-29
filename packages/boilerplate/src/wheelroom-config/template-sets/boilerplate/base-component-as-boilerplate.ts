/** Get fields from a configured model */

export const baseComponentAsBoilerplate = `/**
 * Component
 *
 * Component type: %componentName%
 *
 */

import React from 'react'
import { MediaGatsbyModel } from '@wheelroom/core'
import { getVariation } from './get-variation'
%variationImportList%

const componentList = {
%variationList(indent:2)%
}

export interface %ComponentName%Props {
  /** Gatsby fetched data */
%reactProps(indent:2)%
}

export const %ComponentName% = (props: %ComponentName%Props) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
`
