import { Div } from '@wheelroom/any/elements'
import React from 'react'
import { Action } from '../action/action'
import { TopicOptions } from './topic-options'
import { TopicVariantMap } from './topic-variants'
import { TopicActions } from './topic-actions'
import { topicContentVariantStyle } from './topic-content-variant-style'
import { TopicText } from './topic-text'

export type TopicContent = {
  actions: Action[]
  abstract: string
  heading: string
}

export interface TopicContentProps {
  model: TopicContent
  options: TopicOptions
  variantMap: TopicVariantMap
}

export const TopicContent = (props: TopicContentProps) => {
  return (
    <Div
      css={topicContentVariantStyle({ variant: props.variantMap.topicContent })}
    >
      <TopicText
        variantMap={{ topicText: props.variantMap.topicContent }}
        model={props.model}
        options={{}}
      />
      <TopicActions
        variantMap={{ topicActions: props.variantMap.topicContent }}
        model={props.model}
        options={{}}
      />
    </Div>
  )
}
