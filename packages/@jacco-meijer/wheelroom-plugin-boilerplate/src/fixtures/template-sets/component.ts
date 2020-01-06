/** Get fields from a configured model */

export const component = `/**
 * Component
 *
 * Component type: %componentName%
 *
 */

import { getVariation } from '@jacco-meijer/content-models'
import React from 'react'
import { SectionProps } from '../section-props'
import { FluidImage } from './src/views/image/image'
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
