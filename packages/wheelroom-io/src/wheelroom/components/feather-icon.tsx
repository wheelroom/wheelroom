import { icons } from 'feather-icons'

export type IconName = string

export interface FeatherIconProps {
  name: IconName
  attrs?: any
}

export const FeatherIcon = ({ name, attrs }: FeatherIconProps) => {
  const svgAttrs = {
    ...icons[name].attrs,
    ...(attrs || {}),
  }

  return (
    <svg
      {...svgAttrs}
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
    />
  )
}
