import React from 'react'
import { IconMap } from '../svg/feather/iconMap'
import { mergeNcss } from '../lib/merge-ncss'
import { NcssProps } from '../lib/get-wheel'
import { Box } from './grid'
import { ElementProps, getElementAttrs } from './element'
import { featherIconElementStyle, textIconElementStyle } from './icon-reset'

export interface FeatherIconProps extends ElementProps {
  icon: string
}

export interface IconElementStyle {
  ncss: NcssProps
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

export interface IconProps extends ElementProps {
  icon: string | JSX.Element
}

export const Icon = (props: IconProps) => {
  // When a React element is passed, return that
  if (React.isValidElement(props.icon)) {
    return props.icon
  }
  if (typeof props.icon === 'string') {
    if (Object.keys(IconMap).includes(props.icon)) {
      // When a valid feather icon string is passed, return the svg icon
      return <FeatherIcon icon={props.icon} wheel={props.wheel} />
    } else {
      // When a non feather icon string is passed, return the string
      return <TextIcon text={props.icon} wheel={props.wheel} />
    }
  }
  return null
}
