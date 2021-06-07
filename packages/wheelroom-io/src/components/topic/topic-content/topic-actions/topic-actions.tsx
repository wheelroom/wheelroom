import { Div } from '@wheelroom/any/elements'
import { TopicActionsOptions } from './topic-actions-options'
import { topicActionsVariantStyle } from './topic-actions-variant-style'
import { TopicActionsVariantMap } from './topic-actions-variants'

export type TopicActions = {
  abstract: string
  heading: string
}

export interface TopicActionsProps {
  model: TopicActions
  options: TopicActionsOptions
  variantMap: TopicActionsVariantMap
}

export const TopicActions = (props: TopicActionsProps) => {
  return (
    <Div
      css={topicActionsVariantStyle({ variant: props.variantMap.topicActions })}
    >
      <Div css={{ label: 'actions' }} />
    </Div>
  )
}
