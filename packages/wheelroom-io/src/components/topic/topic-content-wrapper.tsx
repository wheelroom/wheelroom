import React from 'react'
import { Box } from '../../core/elements/grid'
import { getTopicOptions } from '../page-section/get-topic-options'
import { TopicOption } from '../page-section'

/** This style needs cleaning up, only default values here */
const defaultWrapperStyle = {
  label: 'TopicContent',
}

const overrideWrapperStyle = {
  w: 1,
}

export interface TopicContentWrapperProps {
  children: any
  /** Override default wrapper styling */
  contentWrapperStyle?: any
  /** The css order property applied to the container */
  order: number
  /** Options that change topic display behaviour */
  topicOptions: TopicOption[]
}

export const TopicContentWrapper = (props: TopicContentWrapperProps) => {
  const contentWrapperStyle = props.contentWrapperStyle || {}
  const options = getTopicOptions(props.topicOptions)
  console.log(options.hideImage)
  return (
    <Box
      ncss={{
        order: props.order,
        ...defaultWrapperStyle,
        ...contentWrapperStyle,
        ...(!options.hideImage && overrideWrapperStyle),
      }}
    >

      {props.children}
    </Box>
  )
}
