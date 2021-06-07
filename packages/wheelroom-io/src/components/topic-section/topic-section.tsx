import { graphql } from 'gatsby'
import { Div, Hr } from '@wheelroom/any/elements'
import React from 'react'
import { options, Option, Topic, TopicOptions } from '../topic/topic'
import { TopicVariant } from '../topic/topic-variants'
import { topicSectionVariantStyle } from './topic-section-variant-style'

export type TopicSection = TopicOptions & {
  __typename: string
  variant: TopicVariant
  topicsCollection: {
    items: Topic[]
  }
  sys: {
    id: string
  }
}

export interface TopicSectionProps {
  sectionIndex: number
  model: TopicSection
}

export const TopicSection = (props: TopicSectionProps) => {
  if (props.model.variant === 'divider') {
    return <Hr />
  }
  const topicOptions: TopicOptions = {}
  options.forEach((key: Option) => (topicOptions[key] = props.model[key]))

  return (
    <Div css={{ width: '100%', label: 'wrapper' }}>
      <Div css={topicSectionVariantStyle({ variantMap: { topic: props.model.variant } })}>
        {props.model.topicsCollection.items.map(
          (topic: Topic, topicIndex: number) => (
            <Topic
              key={topic.sys.id}
              sectionIndex={props.sectionIndex}
              model={topic}
              topicOptions={topicOptions}
              topicIndex={topicIndex}
              variantMap={{ topic: props.model.variant }}
            />
          )
        )}
      </Div>
    </Div>
  )
}

export const fragment = graphql`
  fragment TopicSection on Contentful_TopicSection {
    __typename
    sys {
      id
    }
    variant
    reversedOrder
    hideIcon
    hideMedia
    hideHeading
    hideAbstract
    hideAction
    topicsCollection {
      items {
        ...Topic
      }
    }
  }
`
