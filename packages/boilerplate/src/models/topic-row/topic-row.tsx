/**
 * Component
 *
 * Component type: topicRow
 *
 */

import React from 'react'
import { ActionProps } from '../action/action'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { TopicProps } from '../topic/topic'
import { TopicRowSingleVar } from './topic-row-single-var'

const componentList = {
  ['single']: TopicRowSingleVar,
}

export interface TopicRowProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  icon: string | JSX.Element
  actions: ActionProps[]
  topics: TopicProps[]
}

export const TopicRow = (props: TopicRowProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
