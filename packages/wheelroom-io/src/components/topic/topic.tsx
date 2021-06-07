import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import { topicPropsFactory } from './topic-props-factory'
import { topicStyleFactory } from './topic-style-factory'

export const variants = [
  'block',
  'card',
  'divider',
  'featured',
  'gallery',
  'headline',
  'hero',
  'image',
  'navigation',
  'quote',
  'showcase',
  'text',
  'video',
] as const
export type Variant = typeof variants[number]

export type Topic = {
  abstract: string
  heading: string
  icon: string
  sys: {
    id: string
  }
}

export const options = [
  'reversedOrder',
  'hideIcon',
  'hideMedia',
  'hideHeading',
  'hideAbstract',
  'hideAction',
] as const
export type Option = typeof options[number]
export type TopicOptions = Partial<Record<Option, boolean>>

export interface TopicProps {
  topic: Topic
  variant: Variant
  topicIndex: number
  topicOptions: TopicOptions
  sectionIndex: number
}

export const Topic = (props: TopicProps) => {
  const topicProps = topicPropsFactory({
    variant: props.variant,
    topicIndex: props.topicIndex,
    sectionIndex: props.sectionIndex,
    topicOptions: props.topicOptions,
  })

  return (
    <Div css={topicStyleFactory({ variant: props.variant })}>
      <H1>{props.topic.heading}</H1>
      <P>{props.topic.abstract}</P>
      <P>{topicProps.useHeadingElement}</P>
    </Div>
  )
}

export const fragment = graphql`
  fragment Topic on Contentful_Topic {
    sys {
      id
    }
    abstract
    heading
    icon
  }
`
