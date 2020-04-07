/**
 * Component
 *
 * Component type: text
 *
 */

import React from 'react'
import { getVariation } from '../../core/lib/get-variation'
import { TextSingleVar } from './text-single-var'
import { TextTreeProps } from '../../core/trees/text/text-tree'

const componentList = {
  ['single']: TextSingleVar,
}

export interface TextProps extends TextTreeProps {
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
