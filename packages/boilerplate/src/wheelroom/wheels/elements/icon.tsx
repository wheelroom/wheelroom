import React from 'react'
import { Box } from './grid'
import { IconMap } from '../../svg/feather/iconMap'
import { featherIconReset, textIconReset } from './icon-reset'
import { NcssProps, Wheel } from '../types'
import { mergeNcss } from '../../lib/merge-ncss'

export const FeatherIcon = (props: {
  icon: string
  ncss?: NcssProps
  wheel: Wheel
}) => {
  if (Object.keys(IconMap).includes(props.icon)) {
    const label = { ncss: { label: 'feather-icon' } }
    /** When a valid feather icon string is passed, return the svg icon */
    const RenderIcon = IconMap[props.icon]

    const ncss = mergeNcss([
      label,
      featherIconReset,
      props.wheel.elementPresets.featherIcon,
      props.wheel.style,
      props,
    ])

    return <RenderIcon ncss={ncss.ncss} wheel={props.wheel} />
  } else {
    return <div>Feather icon {props.icon} not found</div>
  }
}

export const TextIcon = (props: {
  text: string
  ncss?: NcssProps
  wheel: Wheel
}) => {
  const label = { ncss: { label: 'text-icon' } }

  const ncss = mergeNcss([
    label,
    textIconReset,
    props.wheel.elementPresets.textIcon,
    props.wheel.style,
    props,
  ])

  return (
    <Box ncss={ncss.ncss} wheel={props.wheel}>
      {props.text}
    </Box>
  )
}
