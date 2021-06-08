import { Div } from '@wheelroom/any/elements'
import { Media } from '../media/media'
import { TopicOptions } from './topic-options'
import { TopicVariantMap } from './topic-variants'
import { topicMediaVariantStyle } from './topic-media-variant-style'

export interface TopicMediaProps {
  model: Media
  options: TopicOptions
  variantMap: TopicVariantMap
}

export const TopicMedia = (props: TopicMediaProps) => {
  return (
    <Div css={topicMediaVariantStyle({ variant: props.variantMap.topicMedia })}>
      <Media model={props.model} />
    </Div>
  )
}
