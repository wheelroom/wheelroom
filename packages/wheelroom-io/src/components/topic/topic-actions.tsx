import { AnyProps } from '@wheelroom/any/any'
import { Div } from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'
import { Action } from '../action/action'
import { TopicOptions, TopicVariant } from './topic'

export type TopicActions = {
  actions?: Action[]
}

const styleMap: Partial<Record<TopicVariant, any>> = {
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
  variant?: TopicVariant
  options?: TopicOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

type AnyDivProps = AnyProps['div']
export interface TopicActionsProps extends AnyDivProps {
  model?: TopicActions
  options?: TopicOptions
  variant?: TopicVariant
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
          key={action.sys?.id}
          model={action}
          variant={isDisplay ? 'display' : isLink ? 'link' : 'primary'}
        />
      ))}
    </Div>
  )
}
