import { P as AnyP } from '@wheelroom/any/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'

export type TextVariant = 'body' | 'lead'
export type TextOptions = ComponentOptions<'margin'>
export type TextProps = ComponentProps<undefined, TextVariant, TextOptions>['p']

const textStyle: StyleObject = {
  color: 'var(--colors-black)',
  fontSize: 18,
  fontWeight: 400,
  lineHeight: 1.58,
  marginBottom: 0,
  marginTop: 0,
}

const leadVariantStyle: StyleObject = {
  ...textStyle,
  fontSize: 24,
  fontWeight: 600,
}

const marginOptionStyle: StyleObject = {
  marginBottom: 16,
}

const styleMap: StyleMap<TextVariant> = {
  body: textStyle,
  lead: leadVariantStyle,
}

export const textStyleFactory: StyleFactory<TextVariant, TextOptions> = (
  args
) => {
  const useVariant = args.variant || 'body'
  const baseTextStyle = styleMap[useVariant]
  return mediaQuery([baseTextStyle, args.options?.margin && marginOptionStyle])
}

export const Text = ({ variant, options, ...props }: TextProps) => {
  const css = textStyleFactory({
    variant,
    options,
  })
  return <AnyP css={css} {...props} />
}
