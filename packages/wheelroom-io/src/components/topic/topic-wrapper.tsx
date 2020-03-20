import React from 'react'
import { Box } from '../../core/elements/grid'
import { TopicOptions } from '../page-section/get-topic-options'

const defaultWrapperStyle = {
  label: 'topic',
  display: 'flex',
  flexDirection: 'column',
}

export interface TopicWrapperProps {
  children: any
  /** Override default wrapper styling */
  topicWrapperStyle?: any
  /** Topic has rich text */
  hasText: boolean
  /** Topic has rich text */
  hasAction: boolean
  /** Topic options */
  options: TopicOptions
}

export const TopicWrapper = (props: TopicWrapperProps) => {
  const topicWrapperStyle = props.topicWrapperStyle || {}
  return (
    <Box
      ncss={{
        ...defaultWrapperStyle,
        ...topicWrapperStyle,
      }}
    >
      {props.children}
    </Box>
  )
}
