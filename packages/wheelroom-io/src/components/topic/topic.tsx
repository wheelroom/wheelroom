import { Div } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import React from 'react'
import { Action } from '../action/action'
import { Embed } from '../media/embed'
import { MediaBreakpoint } from '../media/mediaBreakpoint'
import { Asset } from '../media/asset'
import { TopicContent } from './topic-content'
import { TopicMedia } from './topic-media'
import { TopicOptions } from './topic-options'
import { topicVariantStyle } from './topic-variant-style'
import { TopicVariantMap } from './topic-variants'

export type Topic = {
  sys: {
    id: string
  }
  abstract: string
  actionsCollection: {
    items: Action[]
  }
  heading: string
  icon: string
  media: Asset
  mediaBreakpoint: MediaBreakpoint
  mediaEmbed: Embed
  poster: Asset
}

export interface TopicProps {
  model: Topic
  options: TopicOptions
  variantMap: TopicVariantMap
}

export const Topic = (props: TopicProps) => {
  return (
    <Div css={topicVariantStyle({ variant: props.variantMap.topic })}>
      <TopicMedia
        variantMap={{ topicMedia: props.variantMap.topic }}
        model={{ asset: props.model.media }}
        options={{}}
      />
      <TopicContent
        variantMap={{ topicContent: props.variantMap.topic }}
        model={{
          abstract: props.model.abstract,
          actions: props.model.actionsCollection.items,
          heading: props.model.heading,
        }}
        options={{}}
      />
    </Div>
  )
}

export const topicFragment = graphql`
  fragment Topic on Contentful_Topic {
    sys {
      id
    }
    heading
    abstract
    icon
    actionsCollection(limit: 1) {
      items {
        ...Action
      }
    }
    media {
      ...Asset
    }
    mediaBreakpoint {
      ...MediaBreakpoint
    }
    mediaEmbed {
      ...Embed
    }
    poster {
      ...Asset
    }
  }
`
