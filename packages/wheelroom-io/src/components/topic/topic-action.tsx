import React from 'react'
import { ActionProps } from '../action'
import { buttonPrimaryStyle } from '../../core/styles/button'
import { Box } from '../../core/elements/grid'
import { Any } from '../../core/elements/any'

const defaultWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  label: 'topic-action',
}

export interface TopicActionProps {
  /** The action to show */
  action: ActionProps
  /** Override default styling of the wrapper */
  actionWrapperStyle?: any
  /** Override default button style */
  actionStyle?: any
}

export const TopicAction = (props: TopicActionProps) => {
  const actionWrapperStyle = props.actionWrapperStyle || {}
  const actionStyle = props.actionStyle || {}
  return (
    <Box ncss={{ ...defaultWrapperStyle, ...actionWrapperStyle }}>
      <Any
        is="span"
        ncss={{
          ...buttonPrimaryStyle,
          ...actionStyle,
        }}
      >
        {props.action.heading}
      </Any>
    </Box>
  )
}
