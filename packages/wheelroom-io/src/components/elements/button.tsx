import { Button as AnyButton } from '@wheelroom/any/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'

export type ButtonVariant = 'primary' | 'secondary' | 'display'
export type ButtonOptions = ComponentOptions<'hideHeading'>
export type ButtonProps = ComponentProps<ButtonOptions, ButtonVariant>['button']

const baseStyle = {
  color: 'white',
  display: 'inline-flex',
  justifyContent: 'center',
  fontSize: 16,
  padding: '8px 16px',
  userSelect: 'none',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 4,
  borderColor: 'transparent',
  textDecoration: 'none',
  ':focus': {
    outlineColor: 'outline',
  },
  svg: {
    width: 15,
    height: 15,
    margin: '0 auto',
    transform: 'translateX(4px)',
  },
}

const primaryStyle = {
  ...baseStyle,
  backgroundColor: 'var(--colors-azure)',
  borderColor: 'var(--colors-azure)',
  transition: 'background-color .25s ease',
  ':hover, :focus': {
    backgroundColor: 'var(--colors-ocean)',
  },
}

const styleMap: StyleMap<ButtonVariant> = {
  primary: primaryStyle,
  secondary: {
    ...baseStyle,
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'var(--colors-azure)',
    transition: 'border-color .25s ease',
    ':hover, :focus': {
      borderColor: 'var(--colors-ocean)',
    },
  },
  display: {
    ...primaryStyle,
    fontSize: ['18px', '18px', '20px'],
    padding: ['16px 24px', '16px 24px', '16px 32px'],
  },
}

export const buttonStyleFactory: StyleFactory<ButtonVariant, ButtonOptions> = (
  args
) => {
  const useVariant = args.variant || 'primary'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const Button = ({ variant, options, ...props }: ButtonProps) => {
  const css = buttonStyleFactory({
    variant,
    options,
  })
  return <AnyButton css={css as any} {...props} />
}
