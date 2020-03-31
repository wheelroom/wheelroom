/**
 * Component
 *
 * Component type: text
 *
 */

import React from 'react'
import { getVariation } from '../../core/lib/get-variation'
import { TextSingleVar } from './text-single-var'
import { StyleTree } from '../../core/lib/style-tree'

const componentList = {
  ['single']: TextSingleVar,
}

export interface TextLocalProps {
  /** Locale needed for rendering rich text */
  locale: string
  styleTree?: StyleTree
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
