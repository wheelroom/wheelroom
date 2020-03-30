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
  BlockLevelElementName,
  MediaObject,
  NcssProps,
} from '../../core/elements/types'
import { PageSectionInfo } from '../../lib/get-page-section-info'
import { ImageProps } from '../../core/elements/image'
import { ActionProps } from '../action/action'
import { VideoProps } from '../../core/elements/video'

const componentList = {
  ['single']: TopicSingleVar,
}

interface TopicLocalProps {
  /** Options that change topic display behaviour */
  pageSectionInfo: PageSectionInfo
  /** Page section actions will override all topic actions */
  pageSectionActions?: ActionProps[]
  /** Override default media props */
  mediaProps?: ImageProps | VideoProps

  /** Defaults to h3 */
  useHeadingElement?: BlockLevelElementName
  /** Defaults to p */
  useAbstractElement?: BlockLevelElementName
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean
  /** Reverse media and content */
  forceReverse?: boolean

  /** Override default wrapper styling */
  topicWrapperStyle?: NcssProps
  /** Override default content wrapper styling */
  contentWrapperStyle?: NcssProps
  /** Override default styling of the image wrapper */
  mediaWrapperStyle?: NcssProps
  /** Override default styling of the headerwrapper */
  headerWrapperStyle?: NcssProps
  /** Override default heading style */
  headingStyle?: NcssProps
  /** Override default paragraph style */
  paragraphStyle?: NcssProps
  /** Override default styling of the action wrapper */
  actionWrapperStyle?: NcssProps
  /** Override default button style */
  actionStyle?: NcssProps
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
