import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'

export type Topic = {
  abstract: string
  heading: string
  icon: string
  sys: {
    id: string
  }
}

export interface TopicProps {
  topic: Topic
}

export const Topic = (props: TopicProps) => (
  <Div>
    <H1>{props.topic.heading}</H1>
    <P>{props.topic.abstract}</P>
  </Div>
)

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
