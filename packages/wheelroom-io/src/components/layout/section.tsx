import { Div } from '@wheelroom/any/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
} from '../../lib/component-styles'

export type SectionVariant = 'button' | 'topic'
export type SectionOptions = ComponentOptions<'noMargin'>
export type SectionProps = ComponentProps<
  undefined,
  SectionVariant,
  SectionOptions
>['div']

const buttonVariantStyle = {
  color: 'black',
}

const topicVariantStyle = {
  color: 'black',
}

const baseStyle = {
  margin: '0 auto',
  padding: 16,
  width: '100%',
}

export const sectionStyleFactory: StyleFactory<SectionVariant, SectionOptions> =
  (args) => {
    return [
      baseStyle,
      args.variant === 'button' && buttonVariantStyle,
      args.variant === 'topic' && topicVariantStyle,
      { marginBottom: args.options?.noMargin ? 0 : 4 },
    ]
  }

export const Section = ({ variant, options, ...props }: SectionProps) => {
  const css = sectionStyleFactory({
    variant,
    options,
  })
  return <Div role="group" css={css as any} {...props} />
}
