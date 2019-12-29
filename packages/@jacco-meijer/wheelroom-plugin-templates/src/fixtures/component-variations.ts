/** Get fields from a configured model */

export const componentVariations = `/**
 * Component
 *
 * Component type: %componentName%
 * Wheelroom type: %componentType%
 *
 */

import { getVariation } from '@jacco-meijer/content-models'
import * as React from 'react'
import { SectionProps } from '../section-props'
import %ComponentNameBasicVar% from './%component-name%-basic-var'

const componentList = {
  // list here
}

export interface %ComponentName%Props extends SectionProps {
  /** Gatsby fetched data */
  // field list here (props)
}

export const %ComponentName% = (props: %ComponentName%Props) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
`
