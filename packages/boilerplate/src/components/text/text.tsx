/**
 * Component
 *
 * Component type: text
 *
 */

import React from 'react'
import { getVariation } from '../../core/lib/get-variation'
import { TextSingleVar } from './text-single-var'
import { TextLocalProps } from '../../core/views/text/text'

const componentList = {
  ['single']: TextSingleVar,
}

export interface TextProps extends TextLocalProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  text: {
    json: string
  }
}

export const Text = (props: TextProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
