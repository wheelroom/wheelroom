import { Div } from '@wheelroom/any/elements'
import { TopicMediaOptions } from './topic-media-options'
import { topicMediaVariantStyle } from './topic-media-variant-style'
import { TopicMediaVariantMap } from './topic-media-variants'

export type TopicMedia = {
  abstract: string
  heading: string
}

export interface TopicMediaProps {
  model: TopicMedia
  options: TopicMediaOptions
  variantMap: TopicMediaVariantMap
}

export const TopicMedia = (props: TopicMediaProps) => {
  return (
    <Div css={topicMediaVariantStyle({ variant: props.variantMap.topicMedia })}>
      <Div css={{ label: 'media' }} />
    </Div>
  )
}
