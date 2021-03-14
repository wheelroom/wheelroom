/* eslint-disable react/prop-types */
import React from 'react'
import { IconMap, IconMapType } from '../svg/feather/iconMap'
import { mergeNcss } from '../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'
import { Box } from './grid'
import { featherIconElementStyle, textIconElementStyle } from './icon-reset'

export interface FeatherIconElementProps extends ElementProps {
  icon: string
  iconMap?: IconMapType
}

export const FeatherIcon = (props: FeatherIconElementProps) => {
  const iconMap = props.iconMap || IconMap
  if (Object.keys(iconMap).includes(props.icon)) {
    const label = { ncss: { label: 'feather-icon' } }
    /** When a valid feather icon string is passed, return the svg icon */
    const RenderIcon = iconMap[props.icon]

    const ncss = mergeNcss([
      label,
      featherIconElementStyle,
      props.wheel.elementNcss.featherIcon,
      props.wheel.style,
      props,
    ])

    return <RenderIcon ncss={ncss} wheel={props.wheel} />
  } else {
    return <div>Feather icon {props.icon} not found</div>
  }
}

export interface TextIconElementProps extends ElementProps {
  text: string
}

export const TextIcon = (props: TextIconElementProps) => {
  const label = { ncss: { label: 'text-icon' } }

  const attrs: any = getElementAttrs(props)
  const ncss = mergeNcss([
    label,
    textIconElementStyle,
    props.wheel.elementNcss.textIcon,
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
  customIconMap?: IconMapType
}

export const Icon = (props: IconProps) => {
  // When a React element is passed, return that
  if (React.isValidElement(props.icon)) {
    return props.icon
  }
  const iconMap = props.customIconMap
    ? { ...IconMap, ...props.customIconMap }
    : IconMap
  if (typeof props.icon === 'string') {
    if (Object.keys(iconMap).includes(props.icon)) {
      // When a valid feather icon string is passed, return the svg icon
      return (
        <FeatherIcon iconMap={iconMap} icon={props.icon} wheel={props.wheel} />
      )
    } else {
      // When a non feather icon string is passed, return the string
      return <TextIcon text={props.icon} wheel={props.wheel} />
    }
  }
  return null
}
