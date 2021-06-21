import { AnyProps, Div } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/style-factory'

export type WrapperOption = 'noMargin' | 'useMaxWidth'
export type WrapperOptions = Partial<Record<WrapperOption, boolean>>

type AnyDivProps = AnyProps['div']
export interface WrapperProps extends AnyDivProps {
  options?: WrapperOptions
  variant?: any
}

const baseStyle = {
  margin: '0 auto',
  padding: 16,
  width: '100%',
  maxWidth: 992,
}

export const wrapperStyleFactory: StyleFactory<any, WrapperOptions> = (
  args
) => {
  return [baseStyle, { marginBottom: args.options?.noMargin ? 0 : 4 }]
}

export const Wrapper = ({ options, ...props }: WrapperProps) => {
  const css = wrapperStyleFactory({ options })
  return <Div css={css} {...props} />
}
