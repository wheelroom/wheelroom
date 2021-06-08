import { Div, H3, P } from '@wheelroom/any/elements'
import { TopicOptions } from './topic-options'
import { TopicVariantMap } from './topic-variants'
import { topicTextVariantStyle } from './topic-text-variant-style'

export type TopicText = {
  abstract: string
  heading: string
}

export interface TopicTextProps {
  model: TopicText
  options: TopicOptions
  variantMap: TopicVariantMap
}

export const TopicText = (props: TopicTextProps) => {
  return (
    <Div css={topicTextVariantStyle({ variant: props.variantMap.topicText })}>
      <H3>{props.model.heading}</H3>
      <P>{props.model.abstract}</P>
    </Div>
  )
}
