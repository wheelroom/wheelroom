import { graphql } from 'gatsby'
import { Div, Hr } from '@wheelroom/any/elements'
import React from 'react'
import { TopicVariant } from '../topic/topic-variants'
import { Topic } from '../topic/topic'
import { topicSectionVariantStyle } from './topic-section-variant-style'

export type TopicSection = {
  __typename: string
  variant: TopicVariant
  reversedOrder: boolean
  hideIcon: boolean
  hideMedia: boolean
  hideHeading: boolean
  hideAbstract: boolean
  hideAction: boolean
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

  return (
    <Div css={{ width: '100%', label: 'wrapper' }}>
      <Div
        css={topicSectionVariantStyle({
          variantMap: { topic: props.model.variant },
        })}
      >
        {props.model.topicsCollection.items.map((topic: Topic) => (
          <Topic
            key={topic.sys.id}
            model={topic}
            variantMap={{ topic: props.model.variant }}
          />
        ))}
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
