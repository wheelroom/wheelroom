import { icons } from 'feather-icons'

export type IconName = string

export interface FeatherIconProps {
  name: IconName
  attrs?: any
}

const dashToCamel = (str: string) => {
  return str.replace(/(-[a-z])/g, ($1) => {
    return $1.toUpperCase().replace('-', '')
  })
}

export const FeatherIcon = ({ name, attrs }: FeatherIconProps) => {
  const dashedAttrs = {
    ...icons[name].attrs,
    ...(attrs || {}),
  }
  // Convert dash case keys into camel case keys
  const svgAttrs = Object.keys(dashedAttrs).reduce((result, current) => {
    result[dashToCamel(current)] = dashedAttrs[current]
    return result
  }, {} as any)

  // Remove class key
  delete svgAttrs.class

  return (
    <svg
      {...svgAttrs}
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
    />
  )
}
