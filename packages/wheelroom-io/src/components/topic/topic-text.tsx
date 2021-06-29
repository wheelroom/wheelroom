import { Div } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import { Text } from '../elements/text'
import { Heading } from '../elements/heading'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'

export type TopicText = {
  abstractString?: string
  headingString?: string
}
export type TopicTextProps = ComponentProps<
  TopicText,
  TopicSectionVariant,
  TopicSectionOptions
>['div']

const styleMap: StyleMap<TopicSectionVariant> = {
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
      order: 2,
      fontSize: ['24px', '32px', '42px'],
      fontStyle: 'italic',
      lineHeight: 1.25,
      margin: 0,
      padding: 0,
    },
    h1: {
      order: 1,
    },
  },
  showcase: {
    p: {
      marginBottom: 0,
    },
  },
  divider: {},
  gallery: {},
  image: {},
  navigation: {},
  text: {},
  video: {},
}

export const topicTextStyleFactory: StyleFactory<
  TopicSectionVariant,
  TopicSectionOptions
> = (args) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
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

  const css = topicTextStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <Heading variant={isLarge ? 'h2' : 'h3'}>{model.headingString}</Heading>
      <Text>{model.abstractString}</Text>
    </Div>
  )
}
