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

interface TopicLocalProps {
  /** Override default wrapper styling */
  topicWrapperStyle?: any

  /** Override default content wrapper styling */
  contentWrapperStyle: any

  /** Override default image props */
  imageProps?: any
  /** Override default styling of the image wrapper */
  imageWrapperStyle?: any

  /** Override default styling of the headerwrapper */
  headerWrapperStyle?: any
  /** Override default heading style */
  headingStyle?: any
  /** Defaults to h3 */
  useHeading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Override default paragraph style */
  paragraphStyle?: any

  /** Override default styling of the action wrapper */
  actionWrapperStyle?: any
  /** Override default button style */
  buttonStyle?: any
}

export interface TopicProps extends TopicLocalProps {
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
