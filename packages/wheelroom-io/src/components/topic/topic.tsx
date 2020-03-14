/**
 * Component
 *
 * Component type: topic
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { TopicSingleVar } from './topic-single-var'
import { FluidImage } from '../../core/elements/types'

const componentList = {
  ['single']: TopicSingleVar,
}

export interface TopicProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  image: FluidImage
  icon: string
  actions: any
}

export const Topic = (props: TopicProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
