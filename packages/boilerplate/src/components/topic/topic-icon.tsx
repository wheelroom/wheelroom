import React from 'react'
import { Box } from '../../core/elements/grid'
import { IconMap } from '../../svg/feather/iconMap'

const defaultIconStyle = {
  color: 'iconColor',
  height: '40px',
  mb: 2,
  strokeWidth: '1px',
  width: '40px',
}

const defaultTextIconStyle = {
  color: 'iconColor',
  fontFamily: 'text',
  fontSize: 8,
  height: '40px',
  mb: 2,
  width: '40px',
}

export const TopicIcon = (props: { icon: string | JSX.Element }) => {
  // When a React element is passed, return that
  if (typeof props.icon === 'object') {
    return props.icon
  }
  if (typeof props.icon === 'string') {
    if (Object.keys(IconMap).includes(props.icon)) {
      // When a valid feather icon string is passed, return the svg icon
      const RenderIcon = IconMap[props.icon]
      return <RenderIcon ncss={{ ...defaultIconStyle }} />
    } else {
      // When a non feather icon string is passed, return the string
      return <Box ncss={{ ...defaultTextIconStyle }}>{props.icon}</Box>
    }
  }
  return null
}
