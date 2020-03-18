/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { Box } from '../../core/elements/grid'

const defaultWrapperStyle = {
  label: 'TopicWrapper',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  maxWidth: '500px',
  minWidth: '500px',
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
