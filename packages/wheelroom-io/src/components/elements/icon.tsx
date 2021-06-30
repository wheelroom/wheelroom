import { Fragment } from 'react'
import * as BootstrapIcon from 'react-bootstrap-icons'
import { css } from '@emotion/react'
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

const iconStyle: StyleObject = {
  fontSize: 16,
}
const smallOptionStyle: StyleObject = {
  fontSize: 20,
}
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
  // const css = iconStyleFactory({
  //   options,
  //   variant,
  // })
  variant = variant || 'Alarm'
  variant = variant in BootstrapIcon ? variant : 'Alarm'
  const Element = BootstrapIcon[variant]
  return (
    <Fragment>
      <Element {...props} />
    </Fragment>
  )
}
