import React from 'react'
import { Box } from '../../core/elements/grid'

/** This style needs cleaning up, onyl default values here */
const defaultWrapperStyle = {
  label: 'TopicContent',
}

export interface TopicContentWrapperProps {
  children: any
  /** Override default wrapper styling */
  contentWrapperStyle?: any
}

export const TopicContentWrapper = (props: TopicContentWrapperProps) => {
  const contentWrapperStyle = props.contentWrapperStyle || {}
  return (
    <Box ncss={{ ...defaultWrapperStyle, ...contentWrapperStyle }}>
      {props.children}
    </Box>
  )
}
