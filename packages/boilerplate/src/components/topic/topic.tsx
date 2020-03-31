/**
 * Component
 *
 * Component type: topic
 *
 */

import React from 'react'
import { getVariation } from '../../core/lib/get-variation'
import { TopicSingleVar } from './topic-single-var'
import { MediaObject } from '../../core/primary-elements/types'
import { TopicLocalProps } from '../../core/views/topic/topic'

const componentList = {
  ['single']: TopicSingleVar,
}

export interface TopicProps extends TopicLocalProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  media: MediaObject | undefined
  icon: string | JSX.Element
  actions: any
}

export const Topic = (props: TopicProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
