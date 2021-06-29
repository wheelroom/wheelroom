import { Any } from '@wheelroom/any/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingOptions = ComponentOptions<'margin' | 'display'>
export type HeadingProps = ComponentProps<
  undefined,
  HeadingVariant,
  HeadingOptions
>['h1']

const headingStyle = {
  marginBottom: 0,
  marginTop: 0,
}

const styleMap: StyleMap<HeadingVariant> = {
  h1: {
    ...headingStyle,
    fontSize: [42, 42, 56, 56],
  },
  h2: {
    ...headingStyle,
    fontSize: [32, 32, 42, 42],
  },
  h3: {
    ...headingStyle,
    fontSize: [20, 20, 24, 24],
  },
  h4: {
    ...headingStyle,
    fontSize: [18, 18, 20, 20],
  },
  h5: {
    ...headingStyle,
    fontSize: [18, 18, 20, 20],
  },
  h6: {
    ...headingStyle,
    fontSize: [18, 18, 20, 20],
  },
}

const marginOptionStyle = {
  marginBottom: 16,
}

const displayOptionStyle = {
  fontSize: 42,
}

export const headingStyleFactory: StyleFactory<HeadingVariant, HeadingOptions> =
  (args) => {
    const useVariant = args.variant || 'h1'
    const baseHeadingStyle = styleMap[useVariant]
    return [
      baseHeadingStyle,
      args.options?.margin && marginOptionStyle,
      args.options?.display && displayOptionStyle,
    ]
  }

export const Heading = ({ variant, options, ...props }: HeadingProps) => {
  const css = headingStyleFactory({
    variant,
    options,
  })
  return (
    // NOTE: The 'is=' works because all variants have element names,
    // adding non element variants requires extra logic here
    <Any is={variant || 'h2'} css={css} {...props}>
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
