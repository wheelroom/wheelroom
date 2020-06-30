export const componentAsBoilerplate = `/**
 * Component variation
 *
 * Component type: %componentName%
 * Variation: %Variation name%
 *
 */

import React from 'react'
import { %ComponentName%Props } from './%component-name%'

export const %ComponentName%%VariationName%Var = (props: %ComponentName%Props) => {
  console.log('%ComponentName%%VariationName%Var props', props)
  return <div>%ComponentName%%VariationName%Var</div>
}
`
