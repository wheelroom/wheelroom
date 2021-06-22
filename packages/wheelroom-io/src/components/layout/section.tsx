import { AnyProps, Div } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/component-styles'

export type SectionOption = 'noMargin'
export type SectionOptions = Partial<Record<SectionOption, boolean>>

type SectionVariant = 'button' | 'topic'

type AnyDivProps = AnyProps['div']
export interface SectionProps extends AnyDivProps {
  options?: SectionOptions
  variant?: SectionVariant
}

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
