/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { Box } from '../../core/elements/grid'

/** This style needs cleaning up, onyl default values here */
const defaultWrapperStyle = {
  label: 'TopicWrapper',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  bg: 'bg',
  boxShadow: '0 0 16px',
  color: 'cardsShadow',
  border: '1px solid',
  borderColor: 'cardsBorder',
  borderRadius: 3,
  maxWidth: '280px',
  minWidth: '280px',
  m: 2,
  transition: 'transform .25s ease',
  ':hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
  },
}

export interface TopicWrapperProps {
  children: any
  /** Override default wrapper styling */
  topicWrapperStyle?: any
}

export const TopicWrapper = (props: TopicWrapperProps) => {
  const topicWrapperStyle = props.topicWrapperStyle || {}
  return (
    <Box is="div" ncss={{ ...defaultWrapperStyle, ...topicWrapperStyle }}>
      {props.children}
    </Box>
  )
}
