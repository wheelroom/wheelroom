import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql } from 'gatsby'
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
  variantMap: TopicVariantMap
}

export const Topic = (props: TopicProps) => {
  return (
    <Div css={topicVariantStyle({ VariantMap: props.variantMap })}>
      <Div css={{ label: 'media' }}></Div>
      <Div css={{ label: 'content' }}>
        <H1>{props.model.heading}</H1>
        <P>{props.model.abstract}</P>
      </Div>
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
