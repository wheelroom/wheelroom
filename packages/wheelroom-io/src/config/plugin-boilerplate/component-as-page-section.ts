export const componentAsPageSection = `/**
 * Component variation
 *
 * Component type: %componentName%
 * Variation: %Variation name%
 *
 */

import React from 'react'
import { %ComponentName%Props } from './%component-name%'
import { NotImplemented } from '../../lib/not-implemented'

export const %ComponentName%%VariationName%Var = (props: %ComponentName%Props) => {
  return <NotImplemented {...props} />
}
`
