/**
 * Component
 *
 * Component type: text
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { TextSingleVar } from './text-single-var'

const componentList = {
  ['single']: TextSingleVar,
}

export interface TextProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  text: {
    json: string
  }
  /** Local props */
  locale: string
}

export const Text = (props: TextProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
