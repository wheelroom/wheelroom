/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { TopicProps } from './topic'
import { Box } from '../../core/elements/grid'
import { H3 } from '../../core/elements/heading'
import { heading3Style } from '../../core/styles/heading'
import { Paragraph } from '../../core/elements/paragraph'

const defaultWrapperStyle = {
  label: 'Copy',
  flex: '1 1 auto',
  mx: 3,
}

const defaultHeadingStyle = { ...heading3Style }
const defaultParagraphStyle = {
  color: 'text',
}

export interface TopicHeaderProps {
  /** The action to show */
  topic: TopicProps
  /** Override default styling of the wrapper */
  headerWrapperStyle?: any
  /** Override default heading style */
  headingStyle?: any
  /** Override default paragraph style */
  paragraphStyle?: any
}

export const TopicHeader = (props: TopicHeaderProps) => {
  const headerWrapperStyle = props.headerWrapperStyle || {}
  const headingStyle = props.headingStyle || {}
  const paragraphStyle = props.paragraphStyle || {}

  return (
    <Box is="header" ncss={{ ...defaultWrapperStyle, ...headerWrapperStyle }}>
      <H3 ncss={{ ...defaultHeadingStyle, ...headingStyle }}>
        {props.topic.heading}
      </H3>
      <Paragraph ncss={{ ...defaultParagraphStyle, ...paragraphStyle }}>
        {props.topic.abstract && props.topic.abstract.abstract}
      </Paragraph>
    </Box>
  )
}
