import { AnyProps } from '@wheelroom/any/any'
import { Div } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import { Abstract } from '../typography/abstract'
import { Heading } from '../typography/heading'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from '../topic-section/contentful-topic-section'

export type TopicText = {
  abstract?: string
  heading?: string
}

type AnyDivProps = AnyProps['div']
export interface TopicTextProps extends AnyDivProps {
  model?: TopicText
  options?: TopicSectionOptions
  variant?: TopicSectionVariant
}

const styleMap: Partial<Record<TopicSectionVariant, any>> = {
  block: {
    flex: '1 1 auto',
    p: { marginBottom: 0 },
  },
  card: {
    display: 'block',
    flex: '1 1 auto',
    p: {
      marginBottom: 0,
    },
  },
  featured: {
    p: {
      marginBottom: 0,
    },
  },
  headline: {
    p: {
      fontSize: ['20px', '20px', '24px', '24px'],
    },
  },
  hero: {
    maxWidth: '30em',
    p: {
      fontSize: ['20px', '20px', '24px', '24px'],
      mb: 0,
    },
  },
  quote: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: {
      order: '2',
      fontSize: ['24px', '32px', '42px'],
      fontStyle: 'italic',
      lineHeight: 1.25,
      margin: 0,
      padding: 0,
    },
    h1: {
      order: '1',
    },
  },
  showcase: {
    p: {
      marginBottom: 0,
    },
  },
}

export const topicTextStyleFactory = (args: {
  variant?: TopicSectionVariant
  options?: TopicSectionOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery(baseStyle)
}

export const TopicText = ({
  model,
  options,
  variant,
  ...props
}: TopicTextProps) => {
  const isLarge = ['featured', 'headline', 'hero', 'quote'].includes(
    variant || 'block'
  )

  const css: any = topicTextStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <Heading is={isLarge ? 'h1' : 'h3'}>{model.heading}</Heading>
      <Abstract>{model.abstract}</Abstract>
    </Div>
  )
}
