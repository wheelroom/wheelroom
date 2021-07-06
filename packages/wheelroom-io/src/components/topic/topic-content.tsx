import { Div } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { ContentfulAction } from '../models/contentful-action'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'
import { TopicActions } from './topic-actions'
import { TopicText } from './topic-text'

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

const baseStyle: StyleObject = {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: baseStyle,
  card: { ...baseStyle, flex: '1 1 auto', color: 'grey' },
  featured: {
    maxWidth: ['35em', '35em', '45%'],
    width: '100%',
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
  showcase: baseStyle,
  video: baseStyle,
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

  return (
    <Div css={css} {...props}>
      <TopicText variant={variant} model={model} options={options} />
      <TopicActions
        variant={variant}
        model={{ contentfulActions: model.contentfulActions }}
        options={options}
      />
    </Div>
  )
}
