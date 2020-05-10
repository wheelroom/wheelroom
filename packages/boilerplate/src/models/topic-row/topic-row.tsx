/**
 * Component
 *
 * Component type: topicRow
 *
 */

import React from 'react'
import { ActionProps } from '../action/action'
import { EmbedProps } from '../embed/embed'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { MediaBreakpointProps } from '../media-breakpoint/media-breakpoint'
import { MediaObject } from '../../wheelroom/wheels/element/types/media'
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
  media: MediaObject | undefined
  icon: string | JSX.Element
  actions: ActionProps[]
  topics: TopicProps[]
  advancedMedia: MediaBreakpointProps | EmbedProps
}

export const TopicRow = (props: TopicRowProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
