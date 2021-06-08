import { Div } from '@wheelroom/any/elements'
import { Abstract } from '../typography/abstract'
import { Heading } from '../typography/heading'
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
  const isLarge = ['featured', 'headline', 'hero', 'quote'].includes(
    props.variantMap.topic || ''
  )
  return (
    <Div css={topicTextVariantStyle({ variant: props.variantMap.topic })}>
      <Heading is={isLarge ? 'h1' : 'h3'}>{props.model.heading}</Heading>
      <Abstract>{props.model.abstract}</Abstract>
    </Div>
  )
}
