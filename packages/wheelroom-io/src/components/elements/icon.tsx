import { Fragment } from 'react'
import * as BootstrapIcon from 'react-bootstrap-icons'
import { Props as BootstrapIconProps } from 'react-bootstrap-icons'
import { ComponentOptions, ComponentProps } from '../../lib/component-styles'

export type IconVariant = keyof typeof BootstrapIcon
export type IconOptions = ComponentOptions<'medium' | 'large'>
export type IconProps = ComponentProps<
  BootstrapIconProps,
  IconVariant,
  IconOptions
>['svg']

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
