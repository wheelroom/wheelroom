import { Fragment } from 'react'
import * as BootstrapIcon from 'react-bootstrap-icons'
import { Props as BootstrapIconProps } from 'react-bootstrap-icons'

export type IconVariant = keyof typeof BootstrapIcon
export type IconOption = 'medium' | 'large'
export type IconOptions = Partial<Record<IconOption, boolean>>

export interface IconProps extends BootstrapIconProps {
  options?: IconOptions
  variant?: IconVariant
}

export const Icon = ({ options, variant, ...props }: IconProps) => {
  options = options || {}
  const optionSize = (options.medium && '3em' && options.large && '5em') || 0
  // 1em is the default size used by Bootstrap
  let size = { size: '1em' }
  if (optionSize) size = { size: optionSize }
  variant = variant || 'Alarm'
  variant = variant in BootstrapIcon ? variant : 'Alarm'
  const Element = BootstrapIcon[variant]
  return (
    <Fragment>
      <Element {...size} {...props} />
    </Fragment>
  )
}
