/** Get fields from a configured model */

export const baseComponentAsPageSection = `/**
 * Component
 *
 * Component type: %componentName%
 *
 */

import React from 'react'
import { MediaObject } from './media'
import { getVariation } from './get-variation'
import { SectionProps } from './section-props'
%variationImportList%

const componentList = {
%variationList(indent:2)%
}

export interface %ComponentName%Props extends SectionProps {
  /** Gatsby fetched data */
%reactProps(indent:2)%
}

export const %ComponentName% = (props: %ComponentName%Props) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
`
