import { Div } from '@wheelroom/any/elements'
import { Action } from '../action/action'
import { TopicOptions } from './topic-options'
import { TopicVariantMap } from './topic-variants'
import { topicActionsVariantStyle } from './topic-actions-variant-style'

export type TopicActions = {
  actions: Action[]
}

export interface TopicActionsProps {
  model: TopicActions
  options: TopicOptions
  variantMap: TopicVariantMap
}

export const TopicActions = (props: TopicActionsProps) => {
  const isLarge = ['featured', 'headline', 'hero', 'quote'].includes(
    props.variantMap.topic || ''
  )
  const isMedium = ['gallery', 'image', 'showcase'].includes(
    props.variantMap.topic || ''
  )
  return (
    <Div css={topicActionsVariantStyle({ variant: props.variantMap.topic })}>
      {props.model.actions.map((action: Action) => (
        <Action
          key={action.sys.id}
          model={action}
          variantMap={{
            action: isLarge ? 'display' : isMedium ? 'link' : 'primary',
          }}
        />
      ))}
    </Div>
  )
}
