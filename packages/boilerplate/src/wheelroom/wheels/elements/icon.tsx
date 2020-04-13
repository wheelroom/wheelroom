import React from 'react'
import { Box } from './grid'
import { IconMap } from '../../svg/feather/iconMap'
import { featherIconPreset, textIconPreset } from './icon-preset'
import { NcssProps, Wheel } from '../types'

export const FeatherIcon = (props: {
  icon: string
  ncss?: NcssProps
  wheel: Wheel
}) => {
  if (Object.keys(IconMap).includes(props.icon)) {
    const label = 'feather-icon'
    /** When a valid feather icon string is passed, return the svg icon */
    const RenderIcon = IconMap[props.icon]
    return (
      <RenderIcon
        ncss={{
          label,
          ...featherIconPreset.ncss,
          ...props.wheel.elementPresets.featherIcon.ncss,
          ...props.wheel.style.ncss,
          ...props.ncss,
        }}
        wheel={props.wheel}
      />
    )
  } else {
    return <div>Feather icon {props.icon} not found</div>
  }
}

export const TextIcon = (props: {
  text: string
  ncss?: NcssProps
  wheel: Wheel
}) => {
  const label = 'text-icon'
  return (
    <Box
      ncss={{
        label,
        ...textIconPreset.ncss,
        ...props.wheel.elementPresets.textIcon.ncss,
        ...props.ncss,
      }}
      wheel={props.wheel}
    >
      {props.text}
    </Box>
  )
}
