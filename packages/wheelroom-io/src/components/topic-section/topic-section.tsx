import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
import { Topic } from '../topic/topic'

export type TopicSection = {
  __typename: string
  variant: string
  topicsCollection: {
    items: Topic[]
  }
  sys: {
    id: string
  }
}

export interface TopicSectionProps {
  section: TopicSection
}

export const TopicSection = (props: TopicSectionProps) => (
  <Div>
    {props.section.topicsCollection.items.map((topic: Topic) => (
      <Topic topic={topic} key={topic.sys.id} />
    ))}
  </Div>
)

export const fragment = graphql`
  fragment TopicSection on Contentful_TopicSection {
    __typename
    sys {
      id
    }
    variant
    topicsCollection {
      items {
        ...Topic
      }
    }
  }
`
