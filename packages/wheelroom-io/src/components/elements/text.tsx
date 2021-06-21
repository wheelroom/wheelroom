import { AnyProps, P as AnyP } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/style-factory'

export type TextVariant = 'lead'
export type TextOption = 'noMargin'
export type TextOptions = Partial<Record<TextOption, boolean>>

type AnyPProps = AnyProps['p']
export interface TextProps extends AnyPProps {
  options?: TextOptions
  variant?: TextVariant
}

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
