import { Div } from '@wheelroom/any/elements'
import React from 'react'
import { Action } from '../../../action/action'
import { TopicOptions } from '../../topic-options'
import { TopicVariantMap } from '../../topic-variants'
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
  return (
    <Div
      css={topicActionsVariantStyle({ variant: props.variantMap.topicActions })}
    >
      {props.model.actions.map((action: Action) => (
        <Action
          key={action.sys.id}
          model={action}
          variantMap={{ action: 'primary' }}
        />
      ))}
    </Div>
  )
}
