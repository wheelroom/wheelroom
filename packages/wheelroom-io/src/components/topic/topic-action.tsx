/**
 * Component variation
 *
 * Component type: topic
 * Variation: Single
 *
 */

import React from 'react'
import { Action, ActionProps } from '../action'
import { Any } from '../../core/elements/any'
import { buttonPrimaryStyle } from '../../core/styles/button'

const defaultWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  label: 'Cta',
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
  buttonStyle?: any
}

export const TopicAction = (props: TopicActionProps) => {
  const actionWrapperStyle = props.actionWrapperStyle || {}
  const buttonStyle = props.buttonStyle || {}
  return (
    <Any is="div" ncss={{ ...defaultWrapperStyle, ...actionWrapperStyle }}>
      <Action
        url={props.action.url}
        heading={props.action.heading}
        title={props.action.title}
        ncss={{
          ...buttonPrimaryStyle,
          ...buttonStyle,
        }}
      />
    </Any>
  )
}
