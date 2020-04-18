import React from 'react'
import { Box } from './grid'
import { IconMap } from '../../svg/feather/iconMap'
import {
  featherIconElementStyle,
  textIconElementStyle,
} from './resets/icon-reset'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export interface FeatherIconProps extends ElementProps {
  icon: string
}

export const FeatherIcon = (props: FeatherIconProps) => {
  if (Object.keys(IconMap).includes(props.icon)) {
    const label = { ncss: { label: 'feather-icon' } }
    /** When a valid feather icon string is passed, return the svg icon */
    const RenderIcon = IconMap[props.icon]

    const ncss = mergeNcss([
      label,
      featherIconElementStyle,
      props.wheel.elementStyles.featherIcon,
      props.wheel.style,
      props,
    ])

    return <RenderIcon ncss={ncss.ncss} wheel={props.wheel} />
  } else {
    return <div>Feather icon {props.icon} not found</div>
  }
}

export interface TextIconProps extends ElementProps {
  text: string
}

export const TextIcon = (props: TextIconProps) => {
  const label = { ncss: { label: 'text-icon' } }

  const attrs: any = getElementAttrs(props)
  const ncss = mergeNcss([
    label,
    textIconElementStyle,
    props.wheel.elementStyles.textIcon,
    props.wheel.style,
    props,
  ])

  return (
    <Box wheel={{ ...props.wheel, style: ncss }} {...attrs}>
      {props.text}
    </Box>
  )
}
