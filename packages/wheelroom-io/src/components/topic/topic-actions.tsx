import { AnyProps } from '@wheelroom/any/any'
import { Div } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import { Action } from '../action/action'
import { ContentfulAction } from '../action/contentful-action'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from '../topic-section/contentful-topic-section'

export type TopicActions = {
  contentfulActions?: ContentfulAction[]
}

type AnyDivProps = AnyProps['div']
export interface TopicActionsProps extends AnyDivProps {
  model?: TopicActions
  options?: TopicSectionOptions
  variant?: TopicSectionVariant
}

const styleMap: Partial<Record<TopicSectionVariant, unknown>> = {
  block: {
    flex: 0,
    marginTop: 16,
  },
  card: {
    marginTop: 16,
  },
  featured: {
    marginTop: ['24px', '24px', '32px'],
  },
  headline: {
    marginTop: 16,
  },
  hero: {
    marginTop: 32,
    maxWidth: '30em',
  },
  quote: {
    marginTop: 64,
  },
  showcase: {
    marginTop: 16,
  },
}

export const topicActionsStyleFactory = (args: {
  variant?: TopicSectionVariant
  options?: TopicSectionOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const TopicActions = ({
  model,
  options,
  variant,
  ...props
}: TopicActionsProps) => {
  const isDisplay = ['featured', 'headline', 'hero', 'quote'].includes(
    variant || 'block'
  )
  const isLink = ['gallery', 'image', 'showcase'].includes(variant || 'block')

  const css = topicActionsStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      {model.contentfulActions?.map((contentfulAction: ContentfulAction) => (
        <Action
          key={contentfulAction.sys?.id}
          model={{ contentfulAction }}
          variant={isDisplay ? 'display' : isLink ? 'link' : 'primary'}
        />
      ))}
    </Div>
  )
}
