import { AnyProps, Button as AnyButton } from '@wheelroom/any/react'

export type ButtonVariant = 'primary' | 'secondary' | 'display' | 'link'
export type ButtonOption = 'hideHeading'
export type ButtonOptions = Partial<Record<ButtonOption, boolean>>

type AnyButtonProps = AnyProps['button']
export interface ButtonProps extends AnyButtonProps {
  options?: ButtonOptions
  variant?: ButtonVariant
}

const baseButtonStyle = {
  color: 'red',
}

// Added for link variant
const linkVariantStyle = {
  color: 'green',
}

export const buttonStyleFactory = (args: {
  variant?: ButtonVariant
  options?: ButtonOptions
}) => {
  const baseStyle = {
    ...baseButtonStyle,
  }
  return [baseStyle, args.variant === 'link' && linkVariantStyle]
}

export const Button = ({ variant, options, ...props }: ButtonProps) => {
  const css: any = buttonStyleFactory({
    variant,
    options,
  })
  return <AnyButton css={css as any} {...props} />
}
