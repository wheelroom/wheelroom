import { Any, AnyProps } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/component-styles'

const headingStyle = {
  marginBottom: 16,
  marginTop: 0,
}

const styleMap = {
  h1: {
    ...headingStyle,
    fontSize: ['42px', '42px', '56px', '56px'],
  },
  h2: {
    ...headingStyle,
    fontSize: ['32px', '32px', '42px', '42px'],
  },
  h3: {
    ...headingStyle,
    fontSize: ['20px', '20px', '24px', '24px'],
  },
  h4: {
    ...headingStyle,
    fontSize: ['18px', '18px', '20px', '20px'],
  },
  h5: {
    ...headingStyle,
    fontSize: ['18px', '18px', '20px', '20px'],
  },
  h6: {
    ...headingStyle,
    fontSize: ['18px', '18px', '20px', '20px'],
  },
}

// Add for noMargin option
const noMarginOptionStyle = {
  margin: 0,
}

// Add for display option
const displayOptionStyle = {
  fontSize: 42,
  backgroundImage:
    'linear-gradient(90deg, var(--color-secondary-500) 0%, var(--color-primary-500) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

export type HeadingVariant = keyof typeof styleMap
export type HeadingOption = 'noMargin' | 'display'
export type HeadingOptions = Partial<Record<HeadingOption, boolean>>

type AnyButtonProps = AnyProps['h1']
export interface HeadingProps extends AnyButtonProps {
  options?: HeadingOptions
  variant?: HeadingVariant
}

export const headingStyleFactory: StyleFactory<HeadingVariant, HeadingOptions> =
  (args) => {
    const useVariant = args.variant || 'h1'
    const baseStyle = styleMap[useVariant]
    return [
      baseStyle,
      args.options?.noMargin && noMarginOptionStyle,
      args.options?.display && displayOptionStyle,
    ]
  }

export const Heading = ({ variant, options, ...props }: HeadingProps) => {
  const css: any = headingStyleFactory({
    variant,
    options,
  })

  return (
    // NOTE: The 'is=' works because all variants have element names, adding non
    // element variants requires extra logic here
    <Any is={variant || 'h1'} css={css} {...props}>
      {props.children}
    </Any>
  )
}

export const H1 = (props: HeadingProps) => <Heading variant="h1" {...props} />
export const H2 = (props: HeadingProps) => <Heading variant="h2" {...props} />
export const H3 = (props: HeadingProps) => <Heading variant="h3" {...props} />
export const H4 = (props: HeadingProps) => <Heading variant="h4" {...props} />
export const H5 = (props: HeadingProps) => <Heading variant="h5" {...props} />
export const H6 = (props: HeadingProps) => <Heading variant="h6" {...props} />
