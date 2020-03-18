import React from 'react'
import { Box } from '../../core/elements/grid'

/** This style needs cleaning up, onyl default values here */
const defaultWrapperStyle = {
  label: 'TopicContentWrapper',
}

export interface TopicContentWrapperProps {
  children: any
  /** Override default wrapper styling */
  contentWrapperStyle?: any
}

export const TopicContentWrapper = (props: TopicContentWrapperProps) => {
  const contentWrapperStyle = props.contentWrapperStyle || {}
  return (
    <Box is="div" ncss={{ ...defaultWrapperStyle, ...contentWrapperStyle }}>
      {props.children}
    </Box>
  )
}
