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
  actions?: ContentfulAction[]
}

type AnyDivProps = AnyProps['div']
export interface TopicActionsProps extends AnyDivProps {
  model?: TopicActions
  options?: TopicSectionOptions
  variant?: TopicSectionVariant
}

const styleMap: Partial<Record<TopicSectionVariant, any>> = {
  block: {
    flex: '0',
    marginTop: '16px',
  },
  card: {
    marginTop: '16px',
  },
  featured: {
    marginTop: ['24px', '24px', '32px'],
  },
  headline: {
    marginTop: '16px',
  },
  hero: {
    marginTop: '32px',
    maxWidth: '30em',
  },
  quote: {
    marginTop: '64px',
  },
  showcase: {
    marginTop: '16px',
  },
}

export const myCompStyleFactory = (args: {
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

  const css: any = myCompStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      {model.actions?.map((action: Action) => (
        <Action
          key={action.sys.id}
          model={action.action}
          variant={isDisplay ? 'display' : isLink ? 'link' : 'primary'}
        />
      ))}
    </Div>
  )
}
