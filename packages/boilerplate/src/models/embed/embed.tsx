/**
 * Component
 *
 * Component type: embed
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { MediaObject } from '../../core/elements/types'
import { EmbedSingleVar } from './embed-single-var'

const componentList = {
  ['single']: EmbedSingleVar,
}

export interface EmbedProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  code: {
    code: string
  }
}

export const Embed = (props: EmbedProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
