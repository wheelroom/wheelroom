import { Fragment } from 'react'
import * as BootstrapIcon from 'react-bootstrap-icons'
import { Props as BootstrapIconProps } from 'react-bootstrap-icons'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
  StyleObject,
} from '../../lib/component-styles'

export type IconVariant = keyof typeof BootstrapIcon
export type IconOptions = ComponentOptions<'small' | 'medium' | 'large'>
export type IconProps = ComponentProps<
  BootstrapIconProps,
  IconVariant,
  IconOptions
>['svg']

const iconStyle: StyleObject = {}
const smallOptionStyle: StyleObject = {}
const mediumOptionStyle: StyleObject = {}
const largeOptionStyle: StyleObject = {}

export const iconStyleFactory: StyleFactory<IconVariant, IconOptions> = (
  args
) => {
  const baseIconStyle = iconStyle
  return [
    baseIconStyle,
    args.options?.small && smallOptionStyle,
    args.options?.medium && mediumOptionStyle,
    args.options?.large && largeOptionStyle,
  ]
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
