import React from 'react'
import { Box } from '../../core/elements/grid'

const defaultWrapperStyle = {
  label: 'topic',
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
  // TODO: add conditional styling if Rich Text, Navigation or Action is applied OR Topic Options are set
  return (
    <Box ncss={{ ...defaultWrapperStyle, ...topicWrapperStyle }}>
      {props.children}
    </Box>
  )
}
