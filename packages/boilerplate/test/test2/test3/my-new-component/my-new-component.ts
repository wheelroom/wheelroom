/**
 * Component
 *
 * Component type: undefined
 * Wheelroom type: undefined
 *
 */

import { componentsMap } from '@jacco-meijer/content-models'
import * as React from 'react'
import { getVariation } from '../get-variation'
import { SectionProps } from '../section-props'
import { undefinedBasicVar } from './undefined-basic-var'

const componentList = [undefinedBasicVar]

export interface undefinedProps extends SectionProps {
  /** Gatsby fetched data */
undefined}

export const undefined = (props: undefinedProps) => {
  const Variation = getVariation(
    props,
    componentsMap.undefined.variations,
    componentList
  )

  return <Variation {...props} />
}
