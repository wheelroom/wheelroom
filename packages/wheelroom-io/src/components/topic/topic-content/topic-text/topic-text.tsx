import { Div, H1, P } from '@wheelroom/any/elements'
import { TopicTextOptions } from './topic-text-options'
import { topicTextVariantStyle } from './topic-text-variant-style'
import { TopicTextVariantMap } from './topic-text-variants'

export type TopicText = {
  abstract: string
  heading: string
}

export interface TopicTextProps {
  model: TopicText
  options: TopicTextOptions
  variantMap: TopicTextVariantMap
}

export const TopicText = (props: TopicTextProps) => {
  return (
    <Div css={topicTextVariantStyle({ variant: props.variantMap.topicText })}>
      <H1>{props.model.heading}</H1>
      <P>{props.model.abstract}</P>
    </Div>
  )
}
