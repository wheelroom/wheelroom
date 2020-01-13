export const componentVariation = `/**
 * Component variation
 *
 * Component type: %componentName%
 * Variation: %Variation name%
 *
 */

import React from 'react'

import { %ComponentName%Props } from './%component-name%'

export const %ComponentName%%VariationName%Var = (props: %ComponentName%Props) => {
  return (
    <div>
      <h2>%ComponentName%%VariationName%Var</h2>
      <p>Hello world</p>
    </div>
  )
}
`
