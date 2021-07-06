import { Div } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { Heading } from '../elements/heading'
import { Text } from '../elements/text'
import { ContentfulAction } from '../models/contentful-action'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'
import { TopicActions } from './topic-actions'

export type TopicContent = {
  contentfulActions?: ContentfulAction[]
  abstractString?: string
  headingString?: string
}
export type TopicContentProps = ComponentProps<
  TopicContent,
  TopicSectionVariant,
  TopicSectionOptions
>['div']

const topicContentStyle: StyleObject = {
  display: 'grid',
  gridTemplateAreas: `"." "." "actions"`,
  gridGap: 16,
  gridArea: 'content',
  gridTemplateRows: 'auto 1fr auto',
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: topicContentStyle,
  card: topicContentStyle,
  featured: {
    ...topicContentStyle,
    margin: 'auto 0',
  },
  headline: {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: ['100%', '48em'],
  },
  gallery: {},
  hero: {
    maxWidth: '80em',
    margin: '0 auto',
    // padding: ['48px 24px', '56px 32px', '72px 40px', '88px 40px'],
    width: '100%',
  },
  quote: {
    textAlign: 'center',
  },
  showcase: topicContentStyle,
  video: topicContentStyle,
  image: {},
  divider: {},
}

export const topicContentStyleFactory: StyleFactory<
  TopicSectionVariant,
  TopicSectionOptions
> = (args) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const TopicContent = ({
  model,
  options,
  variant,
  ...props
}: TopicContentProps) => {
  const css = topicContentStyleFactory({
    options,
    variant,
  })
  model = model || {}
  const headingSize = ['featured', 'headline', 'hero', 'quote'].includes(
    variant || 'block'
  )
  return (
    <Div css={css} {...props}>
      <Heading variant={headingSize ? 'h2' : 'h3'}>
        {model.headingString}
      </Heading>
      <Text>{model.abstractString}</Text>
      <TopicActions
        variant={variant}
        model={{ contentfulActions: model.contentfulActions }}
        options={options}
      />
    </Div>
  )
}
