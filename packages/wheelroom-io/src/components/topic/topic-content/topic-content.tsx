import { Div } from '@wheelroom/any/elements'
import React from 'react'
import { TopicActions } from './topic-actions/topic-actions'
import { TopicContentOptions } from './topic-content-options'
import { topicContentVariantStyle } from './topic-content-variant-style'
import { TopicContentVariantMap } from './topic-content-variants'
import { TopicText } from './topic-text/topic-text'

export type TopicContent = {
  abstract: string
  heading: string
}

export interface TopicContentProps {
  model: TopicContent
  options: TopicContentOptions
  variantMap: TopicContentVariantMap
}

export const TopicContent = (props: TopicContentProps) => {
  return (
    <Div
      css={topicContentVariantStyle({ variant: props.variantMap.topicContent })}
    >
      <TopicText
        variantMap={{ topicText: 'myVar' }}
        model={props.model}
        options={{ myOption: true }}
      />
      <TopicActions
        variantMap={{ topicActions: 'myVar' }}
        model={props.model}
        options={{ myOption: true }}
      />
    </Div>
  )
}
