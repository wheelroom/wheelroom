/**
 * Component
 *
 * Component type: topic
 *
 */

import React from 'react'
import { getVariation } from '../../lib/get-variation'
import { TopicSingleVar } from './topic-single-var'
import {
  FluidImageObject,
  VideoAttributes,
  NcssProps,
} from '../../core/elements/types'
import { TextProps } from '../text'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { ImageProps } from '../../core/elements/image'
import { VideoProps } from '../../core/elements/video'
import { ActionProps } from '../action'

const componentList = {
  ['single']: TopicSingleVar,
}

interface TopicLocalProps {
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
  /** Override default wrapper styling */
  topicWrapperStyle?: NcssProps

  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]

  /** Override default content wrapper styling */
  contentWrapperStyle?: NcssProps

  /** Override default image props */
  imageProps?: ImageProps
  /** Override default styling of the image wrapper */
  imageWrapperStyle?: NcssProps

  /** Override default video props */
  videoProps?: VideoProps
  /** Override default styling of the video wrapper */
  videoWrapperStyle?: NcssProps

  /** Override default styling of the headerwrapper */
  headerWrapperStyle?: NcssProps
  /** Override default heading style */
  headingStyle?: NcssProps
  /** Defaults to h3 */
  useHeading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Override default paragraph style */
  paragraphStyle?: NcssProps

  /** Override default styling of the action wrapper */
  actionWrapperStyle?: NcssProps
  /** Override default button style */
  actionStyle?: NcssProps

  /** Rich text */
  text?: TextProps

  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean

  /** Reverse image and content */
  forceReverse?: boolean
}

export interface TopicProps extends TopicLocalProps {
  /** Gatsby fetched data */
  __typename: string
  title: string
  heading: string
  abstract: {
    abstract: string
  }
  image: FluidImageObject | undefined
  video: VideoAttributes | undefined
  icon: string
  actions: any
}

export const Topic = (props: TopicProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
