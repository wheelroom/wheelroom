import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import React from 'react'
import { TopicContent } from './topic-content/topic-content'
import { TopicMedia } from './topic-media/topic-media'
import { TopicOptions } from './topic-options'
import { topicVariantStyle } from './topic-variant-style'
import { TopicVariantMap } from './topic-variants'

export type Topic = {
  abstract: string
  heading: string
  icon: string
  sys: {
    id: string
  }
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
        variantMap={{ topicMedia: 'myVar' }}
        model={props.model}
        options={{ myOption: true }}
      />
      <TopicContent
        variantMap={{ topicContent: 'myVar' }}
        model={props.model}
        options={{ myOption: true }}
      />
    </Div>
  )
}

export const actionFragment = graphql`
  fragment Action on Contentful_Action {
    sys {
      id
    }
    description
    anchor
    eventId
    heading
    icon
    query
    url
  }
`

export const mediaFragment = graphql`
  fragment Media on Contentful_Asset {
    sys {
      id
    }
    description
    fileName
    height
    size
    title
    url
    width
  }
`

export const mediaBreakpointFragment = graphql`
  fragment MediaBreakpoint on Contentful_MediaBreakpoint {
    sys {
      id
    }
    extraLarge {
      ...Media
    }
    large {
      ...Media
    }
    medium {
      ...Media
    }
    small {
      ...Media
    }
  }
`

export const mediaEmbed = graphql`
  fragment Embed on Contentful_Embed {
    sys {
      id
    }
    type
    code
  }
`

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
      ...Media
    }
    mediaBreakpoint {
      ...MediaBreakpoint
    }
    mediaEmbed {
      ...Embed
    }
    poster {
      ...Media
    }
  }
`
