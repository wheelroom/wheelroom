import { graphql } from 'gatsby'
import { Div, Hr } from '@wheelroom/any/elements'
import React from 'react'
import { options, Option, Topic, TopicOptions, Variant } from '../topic/topic'
import { topicSectionStyleFactory } from './topic-section-style-factory'

export type TopicSection = TopicOptions & {
  __typename: string
  variant: Variant
  topicsCollection: {
    items: Topic[]
  }
  sys: {
    id: string
  }
}

export interface TopicSectionProps {
  /** Use a max width or fluid container */
  containerStyle?: 'container' | 'fluid'
  sectionIndex: number
  section: TopicSection
}

export const TopicSection = (props: TopicSectionProps) => {
  if (props.section.variant === 'divider') {
    return <Hr />
  }
  const topicOptions: TopicOptions = {}
  options.forEach((key: Option) => (topicOptions[key] = props.section[key]))

  return (
    <Div css={{ width: '100%', label: 'wrapper' }}>
      <Div css={topicSectionStyleFactory({ variant: props.section.variant })}>
        {props.section.topicsCollection.items.map(
          (topic: Topic, topicIndex: number) => (
            <Topic
              key={topic.sys.id}
              sectionIndex={props.sectionIndex}
              topic={topic}
              topicOptions={topicOptions}
              topicIndex={topicIndex}
              variant={props.section.variant}
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
