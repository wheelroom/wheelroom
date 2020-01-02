/** Get fields from a configured model */

export const componentVariations = `/**
 * Component
 *
 * Component type: %componentName%
 *
 */

import { getVariation } from '@jacco-meijer/content-models'
import * as React from 'react'
import { SectionProps } from '../section-props'
import %ComponentName%BasicVar from './%component-name%-basic-var'
import { FluidImage } from './src/views/image/image'

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
