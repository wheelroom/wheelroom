import { graphql } from 'gatsby'
import { Div, Hr } from '@wheelroom/any/elements'
import React from 'react'
import { TopicVariant } from '../topic/topic-variants'
import { Topic } from '../topic/topic'
import { TopicOption, topicOptions, TopicOptions } from '../topic/topic-options'
import { getTopicSectionVariantStyle } from './topic-section-variant-style'

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

  // Isolate topic options from topic section model
  const options: TopicOptions = {}
  topicOptions.forEach((key: TopicOption) => (options[key] = props.model[key]))

  return (
    <Div css={{ width: '100%', label: 'wrapper' }}>
      <Div
        css={getTopicSectionVariantStyle({
          variant: props.model.variant,
        })}
      >
        {props.model.topicsCollection.items.map((topic: Topic) => (
          <Topic
            key={topic.sys.id}
            model={topic}
            options={options}
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
