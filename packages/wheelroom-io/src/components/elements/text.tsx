import { P as AnyP } from '@wheelroom/any/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
} from '../../lib/component-styles'

export type TextVariant = 'lead'
export type TextOptions = ComponentOptions<'noMargin'>
export type TextProps = ComponentProps<undefined, TextVariant, TextOptions>['p']

const baseTextStyle = {
  fontSize: 18,
  lineHeight: 1.58,
  fontWeight: 400,
  marginTop: 0,
  marginBottom: 16,
}

const leadVariantStyle = {
  fontSize: 24,
  fontWeight: 600,
}

const noMarginOptionStyle = {
  marin: 0,
}

export const textStyleFactory: StyleFactory<TextVariant, TextOptions> = (
  args
) => {
  const baseStyle = {
    ...baseTextStyle,
  }
  return [
    baseStyle,
    args.options?.noMargin && noMarginOptionStyle,
    args.variant === 'lead' && leadVariantStyle,
  ]
}

export const Text = ({ variant, options, ...props }: TextProps) => {
  const css: any = textStyleFactory({
    variant,
    options,
  })
  return <AnyP css={css} {...props} />
}
