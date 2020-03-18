import React from 'react'
import { Box } from '../../core/elements/grid'

const defaultWrapperStyle = {
  label: 'Topic',
  display: 'flex',
  flexDirection: 'column',
}

export interface TopicWrapperProps {
  children: any
  /** Override default wrapper styling */
  topicWrapperStyle?: any
}

export const TopicWrapper = (props: TopicWrapperProps) => {
  const topicWrapperStyle = props.topicWrapperStyle || {}
  return (
    <Box ncss={{ ...defaultWrapperStyle, ...topicWrapperStyle }}>
      {props.children}
    </Box>
  )
}
