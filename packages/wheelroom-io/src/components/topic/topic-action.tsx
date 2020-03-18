import React from 'react'
import { Action, ActionProps } from '../action'
import { buttonPrimaryStyle } from '../../core/styles/button'
import { Box } from '../../core/elements/grid'

const defaultWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  label: 'TopicAction',
  mx: 3,
  mb: 3,
  flex: '0 1 auto',
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
      <Action
        url={props.action.url}
        heading={props.action.heading}
        title={props.action.title}
        ncss={{
          ...buttonPrimaryStyle,
          ...actionStyle,
        }}
      />
    </Box>
  )
}
